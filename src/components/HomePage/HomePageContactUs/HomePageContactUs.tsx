import { Button } from "../../Button/Button";
import { useContactUsMail } from "../../ContactUs/ContactUsMail/hooks/useContactUsMail";
import { GoogleMapComp } from "../../GoogleMap/GoogleMapComp";
import { Input } from "../../Input/Input";
import "./HomePageContactUs.scss";

export const HomePageContactUs = () => {
  const { mail, onChange, sendEmail, loading } = useContactUsMail();
  return (
    <div className="home-contact-us">
      <div className="map">
        <GoogleMapComp />
      </div>
      <form onSubmit={sendEmail} className="form flex column g30">
        <h3>Contact Us</h3>
        <Input
          required
          type="text"
          onChange={onChange}
          label="full name"
          value={mail.name}
          name="name"
        />
        <Input
          required
          type="email"
          onChange={onChange}
          label="email"
          value={mail.email}
          name="email"
        />
        <Input
          multiple
          rows={7}
          required
          type="text"
          onChange={onChange}
          label="message"
          value={mail.message}
          name="message"
        />
        <Button
          buttonType={"submit"}
          type={"loading"}
          loading={loading}
          text="Send"
        />
      </form>
    </div>
  );
};
