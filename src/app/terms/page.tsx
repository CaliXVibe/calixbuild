import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal-article";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms that govern the CaliX.Build studio site and Night Desk packs.",
};

export default function TermsPage() {
  return (
    <LegalArticle title="Terms of Service">
      <p>
        These Terms govern access to the CaliX.Build studio site and Night Desk
        digital operator packs. By using them you agree to these Terms. The
        written name of the desk is always two words: “Cali X.”
      </p>

      <h2>1. Service</h2>
      <p>
        Cali X Desk is a front-desk idea for home-service companies. Night Desk
        packs are digital downloads: an operator prompt plus a sample lead.
        Checkout, when live, is handled by Gumroad. CaliX.Build is not a
        licensed contractor and does not perform field work. Estimated costs
        are planning ranges, not contracts.
      </p>

      <h2>2. Purchases</h2>
      <p>
        Night Desk packs are one-time digital purchases sold through Gumroad
        when a listing URL is published. Gumroad’s checkout and refund rules
        apply to those payments. This site does not process cards. If a future
        Cali X Desk subscription is offered, you may cancel anytime by emailing{" "}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a> or replying{" "}
        <strong>cancel</strong> to any billing email. No phone call required.
      </p>

      <h2>3. Accounts &amp; acceptable use</h2>
      <p>
        You are responsible for lawful use of any messaging channels and for
        obtaining required consent for SMS or voice communications. You may not
        use the materials to spam, harass, or violate carrier or legal
        requirements.
      </p>

      <h2>4. AI limitations</h2>
      <p>
        Automated replies and operator prompts can be incomplete or incorrect.
        Final pricing, safety decisions, and job acceptance remain your
        responsibility.
      </p>

      <h2>5. Third-party marks</h2>
      <p>
        Gumroad, Jobber, Google, and Angi are trademarks of their owners. Cali
        X Desk is not affiliated with, endorsed by, or a partner of those
        companies.
      </p>

      <h2>6. Liability</h2>
      <p>
        Service is provided “as is.” To the maximum extent permitted by law,
        aggregate liability is limited to fees paid in the prior three months.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </p>
    </LegalArticle>
  );
}
