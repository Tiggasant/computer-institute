import apiClient from "./apiClient";
import { courses as localCourses } from "../data/courses";

/**
 * Fetches the course catalogue.
 * Expected backend contract: GET /api/courses -> Course[]
 *
 * Pattern: try the live API first; if it isn't available yet (404/network
 * error during early development), fall back to the local data file so
 * the site still renders complete content. Swap this fallback out once
 * the institute's CMS/API is live.
 */
export async function getCourses() {
  try {
    const { data } = await apiClient.get("/courses");
    return Array.isArray(data) && data.length ? data : localCourses;
  } catch (error) {
    return localCourses;
  }
}

export async function getCourseById(id) {
  try {
    const { data } = await apiClient.get(`/courses/${id}`);
    return data;
  } catch (error) {
    return localCourses.find((c) => c.id === id) || null;
  }
}
