"use client";

import { useState, type FormEvent } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-wall text-ink">
      <Nav />
      <main>
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-28 pb-24 sm:grid-cols-2 sm:pt-36 sm:pb-32 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-40">
          <div>
            <h1 className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-sm text-ink-soft">
              Custom sizes, bulk orders, or just a question about a finish —
              write to us and someone from the workshop will reply.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft">
                  Email
                </dt>
                <dd className="mt-1 text-ink">hello@frameandco.studio</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft">
                  Workshop
                </dt>
                <dd className="mt-1 text-ink">Mumbai, India</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft">
                  Hours
                </dt>
                <dd className="mt-1 text-ink">Mon–Sat, 10am–6pm IST</dd>
              </div>
            </dl>
          </div>

          <div>
            {submitted ? (
              <p className="text-ink-soft">
                Thanks — we&apos;ll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wide text-ink-soft"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wide text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wide text-ink-soft"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-2 text-ink outline-none focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="border border-ink/20 px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
