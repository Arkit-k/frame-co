"use client";

import { useState, type FormEvent } from "react";

export default function MembershipBand() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="join" className="bg-charcoal px-6 py-20 text-ivory lg:px-10 2xl:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-start sm:gap-20 sm:text-left 2xl:max-w-[90rem] 2xl:px-6 2xl:gap-28">
        <div>
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl 2xl:text-6xl">
            Join the list
          </h2>
          <p className="mt-3 max-w-sm text-ivory/70">
            New prints and studio notes — a few times a year, nothing more.
          </p>

          {submitted ? (
            <p className="mt-6 text-sm text-accent">You&apos;re on it.</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex max-w-sm border-b border-ivory/30 focus-within:border-accent"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full bg-transparent py-2 text-sm text-ivory placeholder:text-ivory/40 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 py-2 text-sm text-ivory/70 transition-colors hover:text-accent"
              >
                Sign up
              </button>
            </form>
          )}
        </div>

        <div
          aria-hidden="true"
          className="flex h-28 w-28 shrink-0 -rotate-6 items-center justify-center rounded-full bg-accent text-center text-[11px] font-medium uppercase leading-tight tracking-wide text-ivory sm:h-32 sm:w-32"
        >
          Get on
          <br />
          the list
        </div>
      </div>
    </section>
  );
}
