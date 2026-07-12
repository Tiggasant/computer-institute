import { useState } from "react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import { branches, primaryContact } from "../data/branches";
import { useFormState } from "../hooks/useFormState";

export default function Contact() {
  const {
    values,
    handleChange,
    status,
    setStatus,
    errorMessage,
    setErrorMessage,
    reset,
  } = useFormState({
    name: "",
    phone: "",
    email: "",
    branch: branches[0].id,
    message: "",
  });
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);
  const selectedBranch =
    branches.find((b) => b.id === selectedBranchId) || branches[0];

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(VITE_FORMSPREE_CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          branch: values.branch,
          message: values.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <Seo
        title="Contact Us | BrightPath Computer Institute"
        description="Get in touch with BrightPath Computer Institute — send an enquiry, call, or WhatsApp any of our 4 branches."
      />
      <PageHero
        eyebrow="Contact Us"
        title="Have a question? Let's talk."
        description="Send an enquiry below, or reach out directly on WhatsApp or phone — whichever is easier for you."
      />

      <section className="section-py bg-paper">
        <div className="container-page grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 card-base p-6 md:p-8">
            <h2 className="font-display font-semibold text-xl text-ink-900 mb-6">
              Send an Enquiry
            </h2>

            {status === "success" ? (
              <div className="rounded-lg bg-signal-50 border border-signal-100 p-6 text-center">
                <p className="font-display font-semibold text-ink-900 mb-1">
                  Thank you!
                </p>
                <p className="text-sm text-ink-600/75">
                  Your message has been received. Our counsellors will contact
                  you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary text-sm mt-5"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                id="contactForm"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    label="Full Name"
                    name="name"
                    value={values.name}
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
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />

                <div>
                  <label
                    className="block text-sm font-medium text-ink-900 mb-1.5"
                    htmlFor="branch"
                  >
                    Preferred Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={values.branch}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-ink-100 px-4 py-2.5 text-sm focus:border-signal-500 focus:ring-1 focus:ring-signal-500 outline-none"
                  >
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-ink-900 mb-1.5"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us which course you're interested in..."
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
                  className="btn-primary w-full sm:w-auto disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="card-base p-6">
              <h3 className="font-display font-semibold text-ink-900 mb-4">
                Reach Us Directly
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${primaryContact.phone}`}
                  className="btn-secondary justify-start text-sm"
                >
                  📞 {primaryContact.phone}
                </a>
                <a
                  href={`https://wa.me/${primaryContact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-start text-sm"
                >
                  💬 Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${primaryContact.email}`}
                  className="btn-secondary justify-start text-sm"
                >
                  ✉️ {primaryContact.email}
                </a>
              </div>
            </div>

            <div className="card-base overflow-hidden">
              <div className="p-4 border-b border-ink-50">
                <label
                  htmlFor="mapBranch"
                  className="text-xs text-ink-600/60"
                >
                  Showing map for
                </label>
                <select
                  id="mapBranch"
                  value={selectedBranchId}
                  onChange={(e) => setSelectedBranchId(e.target.value)}
                  className="block w-full mt-1 text-sm font-medium text-ink-900 outline-none"
                >
                  {branches.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="aspect-video">
                <iframe
                  title={selectedBranch.name}
                  src={selectedBranch.mapEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
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
        className="w-full rounded-lg border border-ink-100 px-4 py-2.5 text-sm focus:border-signal-500 focus:ring-1 focus:ring-signal-500 outline-none"
      />
    </div>
  );
}
