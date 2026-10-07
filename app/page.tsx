export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
          Muneeb Nawaz
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Data Scientist building practical machine learning and analytics systems.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          I work across machine learning, data analytics, and data engineering,
          turning complex data into useful predictions, insights, and decision-support
          systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="https://github.com/muneebnawaz"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-24"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Selected Work
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 p-7">
            <p className="text-sm text-gray-500">Machine Learning</p>
            <h3 className="mt-2 text-2xl font-semibold">
              Knee MRI Abnormality Detection
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              Multimodal machine learning for detecting knee abnormalities using
              MRI studies and radiology reports.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 p-7">
            <p className="text-sm text-gray-500">Deep Learning</p>
            <h3 className="mt-2 text-2xl font-semibold">
              Autism Detection with Domain Adaptation
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              Deep learning research using heterogeneous domain adaptation across
              neuroimaging and facial-image data.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-200 p-7">
            <p className="text-sm text-gray-500">Data Engineering</p>
            <h3 className="mt-2 text-2xl font-semibold">
              GDELT News Intelligence Pipeline
            </h3>
            <p className="mt-4 leading-7 text-gray-600">
              A large-scale news intelligence pipeline for generating company-level
              distress and risk signals from GDELT data.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}