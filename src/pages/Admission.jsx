import { useState } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { courses } from "../data/courses";
import { branches } from "../data/branches";
import { submitAdmissionForm } from "../services/admissionService";
import { useFormState } from "../hooks/useFormState";

export default function Admission() {
  const location = useLocation();
  const preselectedCourse = location.state?.courseId || courses[0].id;

  const {
    values,
    handleChange,
    status,
    setStatus,
    errorMessage,
    setErrorMessage,
    reset,
  } = useFormState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    course: preselectedCourse,
    branch: branches[0].id,
    message: "",
  });
  const [referenceId, setReferenceId] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(VITE_FORMSPREE_ADMISSION_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          phone: values.phone,
          email: values.email,
          qualification: values.qualification,
          course: values.course,
          branch: values.branch,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      // Generate local reference ID
      const refId = `BPI-${Date.now()}`;
      setReferenceId(refId);

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setStatus("submitting");
  //   setErrorMessage("");
  //   try {
  //     const result = await submitAdmissionForm(values);
  //     setReferenceId(result.referenceId);
  //     setStatus("success");
  //     reset();
  //   } catch (err) {
  //     setStatus("error");
  //     setErrorMessage(err.message || "Something went wrong. Please try again.");
  //   }
  // }

  return (
    <>
      <Seo
        title="Online Admission | BrightPath Computer Institute"
        description="Apply for admission online at BrightPath Computer Institute. Choose your course, branch, and reserve your seat."
      />
      <PageHero
        eyebrow="Online Admission"
        title="Reserve your seat in under 2 minutes"
        description="Fill in your details below and our counsellors will confirm your seat, batch timing and fee details by phone."
      />

      <section className="section-py bg-paper">
        <div className="container-page max-w-3xl">
          <div className="card-base p-6 md:p-10">
            {status === "success" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-signal-50 text-signal-600 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-xl text-ink-900 mb-2">
                  Application Received!
                </h2>
                <p className="text-ink-600/75 mb-1">
                  Your reference ID is{" "}
                  <span className="font-mono font-semibold text-signal-700">
                    {referenceId}
                  </span>
                </p>
                <p className="text-sm text-ink-600/60 mb-6">
                  Our admissions team will call you within 24 hours to confirm
                  your seat.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary text-sm"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form
                id="admissionForm"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <Field
                    label="Highest Qualification"
                    name="qualification"
                    value={values.qualification}
                    onChange={handleChange}
                    placeholder="e.g. 12th Pass, Graduate"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Select
                    label="Course of Interest"
                    name="course"
                    value={values.course}
                    onChange={handleChange}
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="Preferred Branch"
                    name="branch"
                    value={values.branch}
                    onChange={handleChange}
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-ink-900 mb-1.5"
                    htmlFor="message"
                  >
                    Anything else we should know? (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink-100 px-4 py-2.5 text-sm focus:border-signal-500 focus:ring-1 focus:ring-signal-500 outline-none resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
                <p className="text-xs text-ink-600/50 text-center">
                  By submitting, you agree to be contacted by BrightPath
                  Computer Institute regarding admissions.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium text-ink-900 mb-1.5"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-ink-100 px-4 py-2.5 text-sm focus:border-signal-500 focus:ring-1 focus:ring-signal-500 outline-none"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, children }) {
  return (
    <div>
      <label
        className="block text-sm font-medium text-ink-900 mb-1.5"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-ink-100 px-4 py-2.5 text-sm focus:border-signal-500 focus:ring-1 focus:ring-signal-500 outline-none"
      >
        {children}
      </select>
    </div>
  );
}
