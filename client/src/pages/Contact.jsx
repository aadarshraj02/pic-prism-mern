import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="mt-20 sm:mt-10 h-[90vh] flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-sm text-center mb-4 text-gray-500">
          Ask us anything and get reply back within 24h
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Your Full Name"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your@mail.com"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="3"
              cols="50"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
