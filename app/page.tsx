import Image from "next/image";
import Link from "next/link";
import { businessEmail, businessPhone, businessPhoneHref } from "@/lib/contact";

const services = [
  {
    title: "Home cleaning",
    text: "From a thorough spring clean to getting a place ready before you move in or spotless after you move out, we leave every room fresh. Selling or building? We make show homes and new builds shine for their first viewing.",
    image: "/images/home-cleaning.svg",
    alt: "Illustration of a sparkling clean house",
  },
  {
    title: "Business cleaning",
    text: "We keep offices hygienic, from banks and corporate headquarters to busy workplaces, and keep kitchens and canteens sanitized. We look after lodges and hotels between guests, clean gyms down to the equipment, and leave warehouses clean and organized.",
    image: "/images/business-cleaning.svg",
    alt: "Illustration of an office building with a mop and bucket",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
            A cleaner city, one space at a time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel">
            From family homes to hotels, warehouses and corporate offices,
            Carlton City Cleaning keeps every space spotless, whatever its size.
          </p>
          <div id="contact" className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${businessEmail}`}
              className="inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-blue"
            >
              Contact us
            </a>
            <a
              href={businessPhoneHref}
              className="font-semibold text-navy underline-offset-4 hover:underline"
            >
              {businessPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-mist ring-1 ring-sky"
            >
              <Image
                src={s.image}
                alt={s.alt}
                width={640}
                height={420}
                className="h-auto w-full"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-navy">{s.title}</h2>
                <p className="mt-3 text-steel">{s.text}</p>
                <Link
                  href="/quote"
                  className="mt-auto self-start pt-6 font-semibold text-blue underline-offset-4 hover:underline"
                >
                  Get a quote →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white">
              No job too big, no detail too small.
            </h2>
            <p className="mt-4 text-lg text-sky">
              We take on large-scale cleaning projects and the clean-up after
              your event, as well as the details that make a space shine: deep
              carpet cleaning and streak-free windows and skylights.
            </p>
          </div>
          <Link
            href="/quote"
            className="mt-8 inline-block shrink-0 rounded-full bg-sunbeam px-6 py-3 font-semibold text-navy transition hover:bg-white md:mt-0"
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
