import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50svh] w-full max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl text-paper italic">
        That page is not on the desk.
      </h1>
      <p className="mt-3 max-w-md text-paper-muted">
        The route you asked for is not part of this studio site.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
      </div>
    </div>
  );
}
