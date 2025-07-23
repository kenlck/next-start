import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col gap-6 items-center justify-center h-full w-full">
        <img
          src="/globe.svg"
          alt="Not Found"
          className="w-24 h-24 mb-4 opacity-80"
        />
        <div className="text-center">
          <h2 className="font-extrabold text-5xl mb-2">404</h2>
          <h3 className="font-bold text-2xl mb-2">Page Not Found</h3>
          <p className="text-gray-500 mb-4">
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
        </div>
        <Link href="/dashboard">
          <Button className="px-6 py-2 text-base font-semibold transition">
            Return Home
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
