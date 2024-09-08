import "./ContactUsInformation.scss";

export const ContactUsInformation = () => {
  return (
    <div className="contact-us-information">
      <h2>Contact Information</h2>
      <div>
        <label>Address:</label>
        <span> 88 Fulton St, New York, NY 10038, USA</span>
      </div>
      <div>
        <label>Phone:</label>
        <span> +1 (908) 087-7947</span>
      </div>
      <div>
        <label>Email:</label>
        <span>PizzaCarve@gmail.com</span>
      </div>
    </div>
  );
};
