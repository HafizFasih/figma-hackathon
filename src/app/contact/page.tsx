/* eslint-disable */
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center w-full pt-10">
      <div className="bg-white flex flex-col lg:flex-row overflow-hidden w-full">
        <div
          className="hidden lg:block bg-cover bg-center w-1/2"
          style={{
            backgroundImage: "url('about.png')",
          }}
        ></div>
        <div className="p-6 sm:p-10 w-full lg:w-1/2 bg-lightGray">
          <h2 className="text-2xl font-clash text-gray-800 mb-4 capitalize">
            contact us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-6 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Type your message here <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-darkPrimary text-white py-2 px-4 rounded-md hover:bg-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
