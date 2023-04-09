import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact us</h1>
        <form action="#">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Abc"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Tell me something about your query."
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
