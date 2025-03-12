import Link from 'next/link';

export default function NotFound() {
  return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
              <svg
                  className="h-12 w-12 text-red-600 dark:text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Page introuvable
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="mt-8">
            <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
  );
}