import axios from "axios";

// Formspree form endpoints. Create two forms at https://formspree.io
// (one for Admissions, one for Contact) and paste their endpoint URLs
// into .env as shown in .env.example. Formspree emails you every
// submission and also keeps a searchable dashboard of all entries —
// no backend server required.
const ADMISSION_ENDPOINT = import.meta.env.VITE_FORMSPREE_ADMISSION_ENDPOINT;
const CONTACT_ENDPOINT = import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT;

/**
 * Submits the online admission / registration form to Formspree.
 * Formspree response (200): { ok: true, next: "..." }
 *
 * If VITE_FORMSPREE_ADMISSION_ENDPOINT isn't set yet (e.g. still building
 * locally before creating the Formspree form), this falls back to a mocked
 * success response so the UI/UX flow can still be built and demoed.
 */
export async function submitAdmissionForm(payload) {
  if (!ADMISSION_ENDPOINT) {
    console.warn(
      "VITE_FORMSPREE_ADMISSION_ENDPOINT is not set — using a mocked response. " +
        "See .env.example to connect a real Formspree form."
    );
    await new Promise((resolve) => setTimeout(resolve, 900));
    return {
      success: true,
      referenceId: `ADM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    };
  }

  try {
    await axios.post(
      ADMISSION_ENDPOINT,
      {
        _subject: `New Admission Enquiry — ${payload.course}`,
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        qualification: payload.qualification,
        course: payload.course,
        branch: payload.branch,
        message: payload.message,
      },
      { headers: { Accept: "application/json" } }
    );
    return {
      success: true,
      referenceId: `ADM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    };
  } catch (error) {
    const message =
      error.response?.data?.errors?.map((e) => e.message).join(", ") ||
      "Could not submit your application. Please try again or call us directly.";
    throw new Error(message);
  }
}

/**
 * Submits the general "Contact Us" enquiry form to Formspree.
 */
export async function submitContactForm(payload) {
  if (!CONTACT_ENDPOINT) {
    console.warn(
      "VITE_FORMSPREE_CONTACT_ENDPOINT is not set — using a mocked response. " +
        "See .env.example to connect a real Formspree form."
    );
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { success: true };
  }

  try {
    await axios.post(
      CONTACT_ENDPOINT,
      {
        _subject: `New Contact Enquiry from ${payload.name}`,
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        branch: payload.branch,
        message: payload.message,
      },
      { headers: { Accept: "application/json" } }
    );
    return { success: true };
  } catch (error) {
    const message =
      error.response?.data?.errors?.map((e) => e.message).join(", ") ||
      "Could not send your message. Please try again or call us directly.";
    throw new Error(message);
  }
}
