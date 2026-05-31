"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    revenue: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Consultation request submitted successfully.");

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      revenue: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#070b18]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Let's Build Your
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mt-2">
            Growth System.
          </h2>
        </div>

        <div
          className="
          border
          border-white/10
          rounded-[32px]
          bg-white/[0.03]
          p-8
          md:p-12
          "
        >
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
            />

            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={form.industry}
              onChange={handleChange}
              className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
            />

            <input
              type="text"
              name="revenue"
              placeholder="Monthly Revenue (Optional)"
              value={form.revenue}
              onChange={handleChange}
              className="bg-[#0c1224] border border-white/10 rounded-xl px-4 py-4 outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your business and goals..."
              value={form.message}
              onChange={handleChange}
              className="
              md:col-span-2
              bg-[#0c1224]
              border
              border-white/10
              rounded-xl
              px-4
              py-4
              outline-none
              resize-none
              "
            />

            <div className="md:col-span-2">
              <button
                type="submit"
                className="
                px-8
                py-4
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                transition
                text-black
                font-semibold
                "
              >
                Book Consultation
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}