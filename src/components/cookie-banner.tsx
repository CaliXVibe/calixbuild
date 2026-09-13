"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "calix-cookie-consent";

const listeners = new Set<() => void>();
let sessionChoice: string | null = null;

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

function getConsent(): string | null {
  if (sessionChoice) {
    return sessionChoice;
  }
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return sessionChoice;
  }
}

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => "ssr");

  const choose = useCallback((value: "accept" | "opt-out") => {
    sessionChoice = value;
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage can be blocked; sessionChoice still hides the banner.
    }
    emit();
  }, []);

  if (consent === "ssr" || consent === "accept" || consent === "opt-out") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cyan/15 bg-navy-deep/95 p-4 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-paper-muted">
          We use essential cookies to run the site. No non-essential scripts
          load on this draft.{" "}
          <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          {" · "}
          <Link
            href="/do-not-sell"
            className="text-primary underline-offset-4 hover:underline"
          >
            Do Not Sell or Share
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button size="sm" variant="outline" onClick={() => choose("opt-out")}>
            Opt out
          </Button>
          <Button size="sm" onClick={() => choose("accept")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
