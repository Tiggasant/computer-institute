import { useState, useCallback } from "react";

/**
 * Small reusable hook for controlled form state + submit lifecycle.
 * Keeps Contact and Admission forms consistent without pulling in a
 * full form library for what are, right now, two simple lead forms.
 */
export function useFormState(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setStatus("idle");
    setErrorMessage("");
  }, [initialValues]);

  return { values, setValues, handleChange, status, setStatus, errorMessage, setErrorMessage, reset };
}
