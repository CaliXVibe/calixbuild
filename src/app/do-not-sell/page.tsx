import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle } from "@/components/legal-article";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Do Not Sell or Share",
  description:
    "CaliX.Build does not sell personal information. California opt-out requests go to calix.build@gmail.com.",
};

export default function DoNotSellPage() {
  return (
    <LegalArticle title="Do Not Sell or Share">
      <p id="opt-out">
        CaliX.Build <strong>does not sell personal information</strong> and does
        not share it for cross-context behavioral advertising. This page is the
        California opt-out notice.
      </p>
      <p>
        To make an opt-out request, or to ask for access or deletion, email{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> with the subject{" "}
        <strong>Do Not Sell or Share</strong>. We honor Global Privacy Control
        signals in browsers that send them.
      </p>
      <p>
        The same rights are described in our{" "}
        <Link href="/privacy#opt-out">Privacy Policy</Link>. There is no other
        public contact address.
      </p>
    </LegalArticle>
  );
}
