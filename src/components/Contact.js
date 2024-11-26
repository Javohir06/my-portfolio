import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    alert("Thank you for your message!");
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText"
    >
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
          Have a project or opportunity in mind? I’d love to hear from you. Drop me a message!
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-4">
            <label className="text-lg" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border-2 border-primary rounded-md"
              placeholder="Your name"
              required
            />
          </div>

          <div className="flex flex-col space-y-4">
            <label className="text-lg" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border-2 border-primary rounded-md"
              placeholder="Your email"
              required
            />
          </div>

          <div className="flex flex-col space-y-4">
            <label className="text-lg" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border-2 border-primary rounded-md"
              placeholder="Write your message here"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-secondary transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
