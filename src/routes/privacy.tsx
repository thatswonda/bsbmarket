import { createFileRoute } from "@tanstack/react-router";
import { pageHead, breadcrumbSchema } from "@/lib/seo";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Effective Date: March 2026 · Version 1.0</p>

      <div className="prose prose-sm sm:prose-base max-w-none text-foreground space-y-6">
        <p>
          BSB Global Tech Ltd ("BSB", "we", "us", "our") is committed to protecting the privacy and personal data of all users of the Bsb Market platform ("Platform"). This Privacy Policy describes how we collect, use, store, share, and protect your personal information when you use Bsb Market.
        </p>
        <p>
          This Policy is issued in compliance with the Nigeria Data Protection Act, 2023 (NDPA), and the Nigeria Data Protection Regulation (NDPR). By using Bsb Market, you consent to the practices described in this Policy.
        </p>

        <h2 className="text-xl font-bold mt-8">1. Data Controller</h2>
        <p>The data controller responsible for your personal information is:</p>
        <p className="font-medium">BSB Global Tech Ltd, Incorporated in Nigeria.<br />For data privacy matters, contact: bsbglobaltech@gmail.com</p>

        <h2 className="text-xl font-bold mt-8">2. Information We Collect</h2>

        <h3 className="text-lg font-semibold mt-4">2.1 Information You Provide</h3>
        <p>When you register or use Bsb Market, we may collect the following categories of personal data:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Identity data: full name, date of birth, profile photograph.</li>
          <li>Contact data: email address, phone number, physical address.</li>
          <li>Account data: username, password (encrypted), account type (buyer, seller, contractor).</li>
          <li>Professional data (for contractors): skills, qualifications, portfolio, service descriptions.</li>
          <li>Transaction data: purchase history, payment records, commission details, promotional earnings.</li>
          <li>Business data (for sellers/employers): business name, product listings, job vacancy details.</li>
          <li>Identity verification data: government-issued ID, where required for verification purposes.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">2.2 Information Collected Automatically</h3>
        <p>When you use Bsb Market, we automatically collect certain technical information, including device information such as device type, operating system, and unique device identifiers.</p>

        <h3 className="text-lg font-semibold mt-4">2.3 Information from Third Parties</h3>
        <p>We may receive information about you from payment processors, identity verification services, and other third-party partners integrated into Bsb Market, in accordance with their respective privacy policies.</p>

        <h2 className="text-xl font-bold mt-8">3. How We Use Your Information</h2>
        <p>We use your personal data for the following lawful purposes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Account Management:</strong> to create, maintain, and secure your account.</li>
          <li><strong>Service Delivery:</strong> to facilitate marketplace transactions, contractor engagements, promotional activities, and job listings.</li>
          <li><strong>Payments & Commissions:</strong> to process payments, collect fees, and disburse promotional earnings.</li>
          <li><strong>Communication:</strong> to send you transaction notifications, platform updates, and support responses.</li>
          <li><strong>Personalisation:</strong> to tailor content, recommendations, and user experience.</li>
          <li><strong>Safety & Fraud Prevention:</strong> to detect, investigate, and prevent fraudulent or prohibited activity.</li>
          <li><strong>Legal Compliance:</strong> to meet our obligations under Nigerian law, including the NDPA and tax regulations.</li>
          <li><strong>Platform Improvement:</strong> to analyse usage trends and improve our features and services.</li>
          <li><strong>Marketing:</strong> to send you promotional communications, subject to your consent.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8">4. Legal Basis for Processing</h2>
        <p>BSB processes your personal data on the following legal bases under the NDPA:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Contractual necessity:</strong> processing necessary to perform our agreement with you.</li>
          <li><strong>Legal obligation:</strong> processing required to comply with applicable Nigerian laws.</li>
          <li><strong>Legitimate interests:</strong> processing for fraud prevention, security, and Platform improvement.</li>
          <li><strong>Consent:</strong> where you have given explicit consent, such as for marketing communications.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8">5. Data Sharing & Disclosure</h2>
        <p>We do not sell your personal data. We may share your information in the following limited circumstances:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>With other users:</strong> profile information visible to other users on the Platform as necessary for platform functionality.</li>
          <li><strong>With payment processors:</strong> to facilitate secure in-app transactions.</li>
          <li><strong>With service providers:</strong> trusted third-party vendors who assist in operating the Platform, under strict data processing agreements.</li>
          <li><strong>With brand partners:</strong> limited data shared with brands for facilitating promotional campaigns in which you participate.</li>
          <li><strong>For legal compliance:</strong> where required by Nigerian law, court order, or lawful request by a government authority.</li>
          <li><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets, your data may be transferred to the relevant party.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8">6. International Data Transfers</h2>
        <p>Bsb Market is operated from Nigeria. If your data is transferred outside Nigeria, such transfers will only occur to countries that provide an adequate level of data protection, or under appropriate safeguards as required by the NDPA and NDPR.</p>

        <h2 className="text-xl font-bold mt-8">7. Data Retention</h2>
        <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements. Upon account deletion, we will delete or anonymise your personal data within ninety (90) days, except where retention is required by law.</p>

        <h2 className="text-xl font-bold mt-8">8. Your Rights Under the NDPA</h2>
        <p>As a data subject under the Nigeria Data Protection Act, 2023, you have the following rights:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Right to access:</strong> to obtain a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification:</strong> to have inaccurate or incomplete data corrected.</li>
          <li><strong>Right to erasure:</strong> to request deletion of your data, subject to legal retention requirements.</li>
          <li><strong>Right to restriction:</strong> to request that we restrict processing of your data in certain circumstances.</li>
          <li><strong>Right to data portability:</strong> to receive your data in a structured, commonly used format.</li>
          <li><strong>Right to object:</strong> to object to processing based on legitimate interests or for direct marketing.</li>
          <li><strong>Right to withdraw consent:</strong> to withdraw consent at any time where processing is based on consent.</li>
        </ul>
        <p>To exercise any of these rights, please contact us at bsbglobaltech@gmail.com. We will respond within thirty (30) days.</p>

        <h2 className="text-xl font-bold mt-8">9. Data Security</h2>
        <p>BSB Global Tech Ltd implements appropriate technical and organisational security measures to protect your personal data, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Encryption of sensitive data in transit and at rest.</li>
          <li>Restricted access controls to user data.</li>
          <li>Regular security assessments and audits.</li>
          <li>Secure payment processing through certified payment partners.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8">10. Cookies & Tracking Technologies</h2>
        <p>Bsb Market may use cookies, web beacons, and similar tracking technologies to enhance your experience, analyse usage, and deliver relevant content. You may control cookie preferences through your device settings or browser.</p>

        <h2 className="text-xl font-bold mt-8">11. Children's Privacy</h2>
        <p>Bsb Market is not intended for use by persons under the age of 18. We do not knowingly collect personal data from minors.</p>

        <h2 className="text-xl font-bold mt-8">12. Third-Party Links</h2>
        <p>Bsb Market may contain links to third-party websites or services. We are not responsible for the privacy practices of such third parties.</p>

        <h2 className="text-xl font-bold mt-8">13. Amendments to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Where material changes are made, we will notify you through the Platform or by email. Your continued use of Bsb Market after the effective date of any update constitutes acceptance of the revised Policy.</p>

        <h2 className="text-xl font-bold mt-8">14. Contact & Data Protection Enquiries</h2>
        <p>For any questions, requests, or concerns regarding this Privacy Policy or your personal data, please contact:</p>
        <p className="font-medium">
          BSB Global Tech Ltd — Data Protection Officer<br />
          Email: bsbglobaltech@gmail.com<br />
          Country: Nigeria
        </p>
        <p className="text-sm text-muted-foreground mt-6">© 2026 BSB Global Tech Ltd. All rights reserved.</p>
      </div>
    </div>
  </div>
);


export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      path: "/privacy",
      title: "Privacy Policy | Bsb Market",
      description: "How Bsb Market (BSB Global Tech Ltd) collects, uses and protects your personal data under the Nigeria Data Protection Act 2023.",
      jsonLd: [breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])],
    }),
  component: PrivacyPolicy,
});
