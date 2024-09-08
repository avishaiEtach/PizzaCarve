import { ContactUsInformation } from "../components/ContactUs/ContactUsInformation/ContactUsInformation";
import { ContactUsMail } from "../components/ContactUs/ContactUsMail/ContactUsMail";

export function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us-header">
        <h1>Contact Us</h1>
      </div>
      <div data-aos="fade-up" className="contact-us-main-container">
        <ContactUsInformation />
        <ContactUsMail />
      </div>
    </div>
  );
}
