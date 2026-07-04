"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-clay-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-clay-200 bg-white/70 px-4 py-3 text-sm text-clay-900 outline-none transition-colors focus:border-blush-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-clay-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className="mt-2 w-full rounded-xl border border-clay-200 bg-white/70 px-4 py-3 text-sm text-clay-900 outline-none transition-colors focus:border-blush-400"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-clay-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what's on your mind..."
          className="mt-2 w-full resize-none rounded-xl border border-clay-200 bg-white/70 px-4 py-3 text-sm text-clay-900 outline-none transition-colors focus:border-blush-400"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" variant="primary">
          {submitted ? "Message Sent ✓" : "Send Message"}
        </Button>
        <p className="text-xs text-clay-400">
          We read every message ourselves and write back personally.
        </p>
      </div>
    </form>
  );
}
