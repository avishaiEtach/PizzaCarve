import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import "./ContactUsMail.scss";
import { useContactUsMail } from "./hooks/useContactUsMail";

export const ContactUsMail = () => {
  const { mail, onChange, sendEmail, loading } = useContactUsMail();
  return (
    <form className="contact-us-send-mail" onSubmit={sendEmail}>
      <div className="flex g20">
        <Input
          type="text"
          label={"name"}
          name="name"
          onChange={onChange}
          value={mail.name}
          required
        />
        <Input
          type="email"
          name="email"
          label={"email"}
          onChange={onChange}
          value={mail.email}
          required
        />
      </div>
      <Input
        type="text"
        name="subject"
        label={"subject"}
        onChange={onChange}
        value={mail.subject}
        required
      />
      <Input
        type="text"
        name="message"
        label={"message"}
        onChange={onChange}
        value={mail.message}
        multiple
        rows={10}
        required
      />
      <Button
        buttonType={"submit"}
        type={"loading"}
        loading={loading}
        text="Send"
      />
    </form>
  );
};
