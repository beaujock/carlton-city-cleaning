export default function Home() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="mb-4 inline-block rounded-full bg-sunbeam px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
          Coming soon
        </p>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
          A cleaner city, one space at a time.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-steel">
          Carlton City Cleaning keeps homes and businesses spotless. Our new
          website is on its way.
        </p>
        <a
          id="contact"
          href="mailto:hello@example.com"
          className="mt-10 inline-block rounded-full bg-navy px-6 py-3 font-semibold text-white transition hover:bg-blue"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
