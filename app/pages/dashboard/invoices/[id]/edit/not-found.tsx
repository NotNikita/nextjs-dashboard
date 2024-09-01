import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function NotFound() {
  return (
    <main className="flex w-full h-full items-center flex-col justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Couldn't find the requested invoice</p>
      <Link
        href="/dashboard/invoices"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 text-sm transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
