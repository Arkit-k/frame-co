export default function ScaleStrip() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pb-28">
      <div className="flex flex-col items-center gap-2 text-xs tracking-wide text-stone">
        <div className="relative h-px w-40 bg-charcoal/30">
          <span className="absolute -left-0.5 -top-1 h-2 w-px bg-charcoal/30" />
          <span className="absolute -right-0.5 -top-1 h-2 w-px bg-charcoal/30" />
        </div>
        <span>Shown at 16 in.</span>
      </div>
    </section>
  );
}
