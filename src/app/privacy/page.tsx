import type { Metadata } from "next";
import Link from "next/link";
import { LegalArticle } from "@/components/legal-article";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CaliX.Build collects, uses, and does not sell personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalArticle title="Privacy Policy">
      <p>
        This Privacy Policy explains how CaliX.Build collects, uses, and shares
        information when you use our websites, shop, forms, and related
        services.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          Name, company, email, phone, and messages you send when you contact
          us
        </li>
        <li>Usage and device logs for reliability and security</li>
        <li>
          Purchase details handled by Gumroad when you buy a Night Desk pack
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>Answer you and deliver digital products you buy</li>
        <li>Keep the site secure and prevent abuse</li>
        <li>Improve the product</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We share data only with processors that run the product — hosting and
        Gumroad checkout. <strong>We do not sell personal information.</strong>
      </p>

      <h2 id="opt-out">California rights</h2>
      <p>
        California residents may opt out of any sale or sharing by emailing{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> with the subject{" "}
        <strong>Do Not Sell or Share</strong>. We honor Global Privacy Control
        signals. You can request access or deletion at the same address. A
        dedicated opt-out page lives at{" "}
        <Link href="/do-not-sell">/do-not-sell</Link>.
      </p>

      <h2>Quotes</h2>
      <p>Estimated costs are planning ranges only — not a contract.</p>

      <h2>Contact</h2>
      <p>
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </p>
    </LegalArticle>
  );
}
