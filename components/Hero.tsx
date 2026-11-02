import Image from "next/image";
import Link from "next/link";

type ClusterItem = {
  image: string;
  alt: string;
  slug?: string;
  span?: string;
};

const CLUSTER: ClusterItem[] = [
  { image: "/images/frames/hero-feature.jpg", alt: "Colourful landscape print in a black frame", span: "col-span-2 row-span-2" },
  { image: "/images/frames/oak.jpg", alt: "Oak picture frame", slug: "oak" },
  { image: "/images/frames/ash.jpg", alt: "Ash picture frame", slug: "ash" },
  { image: "/images/frames/brass.jpg", alt: "Brass-edged picture frame", slug: "brass" },
  { image: "/images/frames/terracotta.jpg", alt: "Terracotta picture frame", slug: "terracotta" },
  { image: "/images/frames/smoked-oak.jpg", alt: "Smoked oak picture frame", slug: "smoked-oak" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/wall-texture.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-wall/55" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-wall" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-28 pb-16 sm:grid-cols-[1fr_1.1fr] sm:items-center sm:gap-10 sm:pt-32 sm:pb-24 lg:px-10 2xl:max-w-[90rem] 2xl:px-16 2xl:pt-40">
        <div className="order-2 sm:order-1 sm:self-end sm:pb-6">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl 2xl:text-8xl">
            On the
            <br />
            wall.
          </h1>
          <p className="mt-6 max-w-sm text-balance text-ink-soft 2xl:max-w-md 2xl:text-lg">
            Every frame is cut, joined, and finished by hand in our Mumbai
            workshop — built to hold the pieces you don&apos;t want to lose.
          </p>
        </div>

        <div className="order-1 sm:order-2">
          <div className="mx-auto grid aspect-[4/5] w-full max-w-sm grid-cols-3 grid-rows-3 gap-2.5 sm:max-w-md sm:gap-3">
            {CLUSTER.map((item) => {
              const inner = (
                <div className="group relative h-full w-full overflow-hidden shadow-[0_14px_30px_-16px_rgba(26,24,22,0.4)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority
                    sizes="(min-width: 640px) 220px, 160px"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
              );
              return item.slug ? (
                <Link
                  key={item.image}
                  href={`/shop/${item.slug}`}
                  className={item.span ?? ""}
                >
                  {inner}
                </Link>
              ) : (
                <div key={item.image} className={item.span ?? ""}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
