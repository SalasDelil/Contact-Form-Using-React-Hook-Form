import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "../styles/ContactForm.css";

interface FormValue {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useForm<FormValue>();
  const { control, formState, handleSubmit, register } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValue) => {
    console.log("Form submitted.", data);
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="form-label" htmlFor="fullName">Full Name</label>
        <input
          className={`form-input ${errors.fullName ? "input-error" : ""}`}
          type="text"
          id="fullName"
          {...register("fullName", {
            required: { value: true, message: "Your Full Name is required." },
          })}
        />
        <p className="error-message">{errors.fullName?.message}</p>

        <label className="form-label" htmlFor="email">Email</label>
        <input
          className={`form-input ${errors.email ? "input-error" : ""}`}
          type="email"
          id="email"
          {...register("email", {
            required: { value: true, message: "Email is required." },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format.",
            },
          })}
        />
        <p className="error-message">{errors.email?.message}</p>

        <label className="form-label" htmlFor="message">Message</label>
        <textarea
          className={`form-textarea ${errors.message ? "input-error" : ""}`}
          id="message"
          {...register("message", {
            required: { value: true, message: "Message is required." },
          })}
        />
        <p className="error-message">{errors.message?.message}</p>

        <button className="submit-button" type="submit">Submit</button>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default ContactForm;
