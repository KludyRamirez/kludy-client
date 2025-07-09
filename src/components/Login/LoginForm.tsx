import React, { useState, ChangeEvent, FocusEvent, FormEvent } from "react";
import { useLoginMutation } from "../../features/api/Auth";

interface FormValues {
  username: string;
  password: string;
}

interface Errors {
  username?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const [login] = useLoginMutation();

  const validateField = (name: keyof FormValues, value: string): string => {
    let errorMsg = "";

    switch (name) {
      case "username":
        if (!value.trim()) errorMsg = "Username is required";
        else if (value.length < 3)
          errorMsg = "Username must be at least 3 characters";
        else if (value.length > 20)
          errorMsg = "Username cannot exceed 20 characters";
        break;

      case "password":
        if (!value) errorMsg = "Password is required";
        else if (value.length < 6)
          errorMsg = "Password must be at least 6 characters";
        else if (value.length > 20)
          errorMsg = "Password cannot exceed 20 characters";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    validateField(name as keyof FormValues, value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name as keyof FormValues, value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};

    Object.keys(formValues).forEach((field) => {
      const error = validateField(
        field as keyof FormValues,
        formValues[field as keyof FormValues]
      );
      if (error) newErrors[field as keyof Errors] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await login({
        username: formValues.username,
        password: formValues.password,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center flex-col items-start gap-4">
        <input
          type="text"
          name="username"
          className="w-[320px] md:w-[400px] h-[56px] border-[1px] border-gray-600 px-4 focus:border-blue-700 focus:border-none font-[extra-light]"
          placeholder="Enter your username"
          value={formValues.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && (
          <span className="text-red-500 text-[14px]">{errors.username}</span>
        )}
      </div>
      <div className="spacer-small"></div>
      <div className="flex justify-center flex-col items-start gap-4">
        <input
          type="password"
          name="password"
          className="w-[320px] md:w-[400px] h-[56px] border-[1px] border-gray-600 px-4 focus:border-blue-700 focus:border-none font-[extra-light]"
          placeholder="Enter your password"
          value={formValues.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && (
          <span className="text-red-500 text-[14px]">{errors.password}</span>
        )}
      </div>
      <div className="spacer-xs"></div>
      <div className="spacer-small"></div>
      <button
        type="submit"
        className={`cursor-pointer py-[1rem] w-[320px] md:w-[400px] ${
          Object.values(errors).some((err) => err !== "") ||
          !formValues.username ||
          !formValues.password
            ? "border-[1px] border-gray-300 bg-gray-300 text-white"
            : "footer-btn"
        }`}
        disabled={
          Object.values(errors).some((err) => err !== "") ||
          !formValues.username ||
          !formValues.password
        }
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
