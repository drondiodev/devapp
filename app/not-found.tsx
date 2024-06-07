import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="bg-white py-6 sm:py-0">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-center  md:py-24 lg:py-32 xl:py-64">
            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              Error 404
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              Page non trouvée
            </h1>

            <p className="mb-8 text-center text-gray-500 sm:text-left md:text-lg">
              Cette page n&apos; existe pas.
            </p>

            <Link
              href="/"
              className="inline-block rounded-lg px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              Vers la page d&apos; accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
