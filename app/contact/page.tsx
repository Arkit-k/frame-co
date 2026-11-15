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
    <div className="min-h-screen bg-ivory text-charcoal">
      <Nav />
      <main>
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-32 pb-24 sm:grid-cols-2 sm:pt-40 sm:pb-32 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-44">
          <div>
            <h1 className="font-serif text-5xl tracking-tight text-charcoal sm:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-sm text-stone">
              Custom sizes, bulk orders, or just a question about sizing —
              write to us and someone from the studio will reply.
            </p>

            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone">
                  Email
                </dt>
                <dd className="mt-1 text-charcoal">hello@frameandco.studio</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone">
                  Studio
                </dt>
                <dd className="mt-1 text-charcoal">Mumbai, India</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-stone">
                  Hours
                </dt>
                <dd className="mt-1 text-charcoal">Mon–Sat, 10am–6pm IST</dd>
              </div>
            </dl>
          </div>

          <div>
            {submitted ? (
              <p className="text-stone">
                Thanks — we&apos;ll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wide text-stone"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-2 text-charcoal outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wide text-stone"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-charcoal/20 bg-transparent py-2 text-charcoal outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wide text-stone"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border-b border-charcoal/20 bg-transparent py-2 text-charcoal outline-none focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="border border-charcoal/20 px-5 py-2.5 text-sm text-charcoal transition-colors hover:border-accent hover:text-accent"
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
