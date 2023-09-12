import { useState, useRef, useEffect } from "react";

export const useErrorHandling = (error, setError, resetFieldsCallback) => {
  const emailInputRef = useRef(null);

  const resetFields = () => {
    if (resetFieldsCallback) {
      resetFieldsCallback();
    }
    emailInputRef.current.focus();
  };

  useEffect(() => {
    if (error) {
      resetFields();
      setError("");
    }
  }, [error, setError]);
};
