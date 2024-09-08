import emailjs from "@emailjs/browser";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";

export const useContactUsMail = () => {
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        {
          ...mail,
          subject:
            mail.subject === "" ? "I want to let you know" : mail.subject,
        },
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
      );
      enqueueSnackbar("Your Email Was Sent Successfully!", {
        variant: "success",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
      setMail({ name: "", email: "", message: "", subject: "" });
    } catch (err: any) {
      enqueueSnackbar("Error Sending Your Email", {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
    } finally {
      setLoading(false);
    }
  };

  const onChange = (
    ev:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = ev.target;
    setMail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return { mail, onChange, sendEmail, loading };
};
