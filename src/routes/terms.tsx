import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">Terms of Use</h1>
      <p className="text-sm text-muted-foreground mb-8">Effective Date: March 2026 · Version 1.0</p>

      <div className="prose prose-sm sm:prose-base max-w-none text-foreground space-y-6">
        <p>
          These Terms of Use ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and BSB Global Tech Ltd, a company incorporated in Nigeria ("BSB", "we", "us", or "our"), governing your access to and use of the BSB Market mobile and web application ("the Platform" or "BSB Market").
        </p>
        <p>
          By registering, accessing, or using BSB Market in any capacity, you confirm that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree, you must immediately discontinue use of the Platform.
        </p>

        <h2 className="text-xl font-bold mt-8">1. Eligibility</h2>
        <p>By using BSB Market, you represent and warrant that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>You are at least eighteen (18) years of age.</li>
          <li>You have the legal capacity to enter into a binding agreement.</li>
          <li>You are not prohibited from using the Platform under any applicable law.</li>
          <li>All information you provide during registration and use of the Platform is accurate, current, and complete.</li>
        </ul>
        <p>BSB reserves the right to suspend or terminate accounts found to be operated by persons under the age of 18 or in violation of these eligibility requirements.</p>

        <h2 className="text-xl font-bold mt-8">2. Account Registration</h2>
        <p>To access the features of BSB Market, you must create an account. You agree to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide accurate, truthful, and complete registration information.</li>
          <li>Keep your login credentials secure and confidential.</li>
          <li>Notify BSB immediately at bsbmarketteam@gmail.com if you suspect any unauthorised access to your account.</li>
          <li>Accept full responsibility for all activities that occur under your account.</li>
        </ul>
        <p>BSB reserves the right to reject any registration or suspend any account at its sole discretion, with or without notice, where there is a reasonable basis to believe that the account poses a risk to the Platform or its users.</p>

        <h2 className="text-xl font-bold mt-8">3. Platform Features & User Roles</h2>

        <h3 className="text-lg font-semibold mt-4">3.1 Contractor Services</h3>
        <p>Users may register as contractors to offer professional services on BSB Market. As a contractor, you agree to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide accurate descriptions of your skills, qualifications, and services.</li>
          <li>Deliver services in a professional, timely, and honest manner.</li>
          <li>Not misrepresent your identity, credentials, or capabilities.</li>
          <li>Comply with all applicable Nigerian laws governing the provision of your services.</li>
        </ul>
        <p>BSB Market acts solely as an intermediary platform connecting contractors with potential clients. BSB is not a party to any service agreement between contractors and clients, and bears no liability for the quality, legality, or outcome of services rendered.</p>

        <h3 className="text-lg font-semibold mt-4">3.2 Product Listings & Marketplace</h3>
        <p>Users may list physical or digital products for sale on BSB Market. By listing a product, you represent and warrant that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>You have full legal ownership or authority to sell the listed item.</li>
          <li>The product listing is accurate, not misleading, and complies with applicable consumer protection laws.</li>
          <li>The product is not prohibited, counterfeit, illegal, hazardous, or infringing on any third-party intellectual property rights.</li>
          <li>You will fulfil orders promptly and as described.</li>
        </ul>
        <p>BSB reserves the right to remove any listing that violates these Terms or applicable law, without prior notice.</p>

        <h3 className="text-lg font-semibold mt-4">3.3 Brand Promotions</h3>
        <p>BSB Market facilitates promotional campaigns by brands, allowing users to participate and earn allocated compensation. With respect to promotions:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Participation in any promotion is subject to the specific terms and conditions set by the brand.</li>
          <li>Compensation amounts are set and disbursed in accordance with the terms of each campaign.</li>
          <li>BSB acts as a facilitator and is not responsible for the fulfilment of promotional obligations by brands.</li>
          <li>Users must complete promotional tasks genuinely and in good faith. Fraudulent participation will result in disqualification and potential account termination.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">3.4 Job Vacancy Listings</h3>
        <p>Users and businesses may post job vacancies on BSB Market. By posting a vacancy, you agree that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The job listing is genuine, accurate, and not misleading.</li>
          <li>You will not use vacancy listings for any unlawful recruitment, scam, or fraudulent purpose.</li>
          <li>BSB is not responsible for the outcome of any hiring process conducted through the Platform.</li>
          <li>You will handle all applicant data in compliance with applicable data protection laws.</li>
        </ul>

        <h2 className="text-xl font-bold mt-8">4. Payments, Commissions & Prohibited Off-Platform Transactions</h2>

        <h3 className="text-lg font-semibold mt-4">4.1 In-Platform Payments</h3>
        <p>All transactions on BSB Market — including payments for contractor services, product purchases, and promotional compensation — must be conducted exclusively through the in-app payment system provided by BSB Market.</p>

        <h3 className="text-lg font-semibold mt-4">4.2 Commission & Transaction Fees</h3>
        <p>BSB Global Tech Ltd charges a commission or transaction fee on applicable transactions conducted through the Platform. The applicable fee schedule will be clearly disclosed to you at the point of transaction or within your account settings. By completing a transaction, you consent to the applicable fee deduction.</p>

        <h3 className="text-lg font-semibold mt-4">4.3 WARNING: Off-Platform Payments</h3>
        <p className="font-semibold text-destructive">
          ⚠ IMPORTANT NOTICE: Users are strictly warned not to make or receive payments outside the BSB Market platform. BSB Global Tech Ltd accepts NO liability, responsibility, or obligation for any loss, fraud, dispute, or damage arising from transactions conducted outside the Platform. Any off-platform payment is undertaken entirely at your own risk. BSB will not mediate, intervene, or provide any form of recourse for off-platform transactions.
        </p>

        <h3 className="text-lg font-semibold mt-4">4.4 Refunds & Disputes</h3>
        <p>Refund and dispute resolution procedures are governed by Section 10 (Refund Policy) of these Terms. BSB will make reasonable efforts to facilitate dispute resolution for transactions conducted within the Platform but does not guarantee any specific outcome.</p>

        <h2 className="text-xl font-bold mt-8">5. User Conduct & Prohibited Activities</h2>
        <p>You agree not to engage in any of the following prohibited activities on BSB Market:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Posting false, fraudulent, misleading, or deceptive content or listings.</li>
          <li>Impersonating any person, business, or entity.</li>
          <li>Using the Platform for any unlawful purpose or in violation of any applicable Nigerian or international law.</li>
          <li>Harassing, threatening, abusing, or defaming any other user.</li>
          <li>Uploading or sharing content that infringes intellectual property rights.</li>
          <li>Uploading viruses, malware, or any harmful code.</li>
          <li>Attempting to gain unauthorised access to BSB's systems or other users' accounts.</li>
          <li>Engaging in any activity that disrupts or interferes with the operation of the Platform.</li>
          <li>Using the Platform to distribute unsolicited commercial communications (spam).</li>
          <li>Circumventing any security, fraud prevention, or payment features of the Platform.</li>
        </ul>
        <p>Violation of these prohibitions may result in immediate account suspension or termination, removal of content, and/or referral to law enforcement authorities.</p>

        <h2 className="text-xl font-bold mt-8">6. Intellectual Property</h2>
        <p>All content, trademarks, logos, software, designs, text, graphics, and other materials on BSB Market are the property of BSB Global Tech Ltd or its licensors and are protected under Nigerian and international intellectual property laws.</p>
        <p>You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely for its intended purposes. You may not copy, modify, distribute, sell, or create derivative works from any part of the Platform without express written permission from BSB.</p>
        <p>Content posted by users remains the property of the respective user; however, by posting on BSB Market, you grant BSB a non-exclusive, royalty-free, worldwide licence to use, display, and reproduce such content for the purposes of operating and promoting the Platform.</p>

        <h2 className="text-xl font-bold mt-8">7. Disclaimers & Limitation of Liability</h2>
        <p>BSB Market is provided on an "as is" and "as available" basis. To the fullest extent permitted by Nigerian law, BSB Global Tech Ltd disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        <p>BSB does not warrant that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The Platform will be uninterrupted, error-free, or free from viruses or other harmful components.</li>
          <li>Any information on the Platform is accurate, complete, or current.</li>
          <li>The quality or legality of any service, product, or promotion listed by users meets your expectations.</li>
        </ul>
        <p>To the maximum extent permitted by applicable law, BSB Global Tech Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Platform.</p>

        <h2 className="text-xl font-bold mt-8">8. Indemnification</h2>
        <p>You agree to indemnify, defend, and hold harmless BSB Global Tech Ltd, its directors, officers, employees, agents, and partners from and against any claims, liabilities, damages, losses, and expenses arising out of or related to your breach of these Terms, your use of or activities on BSB Market, any content you post, any dispute between you and another user, or your violation of any applicable law or third-party rights.</p>

        <h2 className="text-xl font-bold mt-8">9. Termination</h2>
        <p>BSB reserves the right to suspend, restrict, or terminate your account and access to the Platform at any time, with or without notice, for any reason, including breach of these Terms.</p>
        <p>Upon termination, your right to use the Platform ceases immediately. Sections of these Terms that by their nature should survive termination shall continue to apply, including but not limited to Sections 6 (Intellectual Property), 7 (Liability), 8 (Indemnification), and 11 (Governing Law).</p>

        <h2 className="text-xl font-bold mt-8">10. Refund Policy</h2>
        <p>BSB Market is committed to ensuring a fair and transparent marketplace experience. This Refund Policy applies exclusively to physical and digital product purchases made through the BSB Market platform. It does not apply to contractor service fees, promotional earnings, or job-related transactions.</p>

        <h3 className="text-lg font-semibold mt-4">10.1 Eligibility to Request a Refund</h3>
        <p>A buyer may be eligible for a refund if the purchased product is not satisfactory, is not as described, is defective, or does not meet the buyer's reasonable expectations upon receipt. To initiate a refund request, the buyer must:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Report the issue to BSB Market Support within three (3) days of receiving the product.</li>
          <li>Provide a clear description of the issue along with supporting evidence.</li>
          <li>Submit the report through the official BSB Market support channel at bsbmarketteam@gmail.com or via the in-app support feature.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">10.2 Refund Tag (RF-TAG)</h3>
        <p>Where BSB Market Support determines that a refund is warranted, the buyer will be issued a Refund Tag ("RF-TAG"). The RF-TAG is an official authorisation code issued exclusively by BSB Market Support that confirms the refund request has been approved and the product return is authorised.</p>
        <p className="font-medium">NOTE: Only transactions accompanied by a valid BSB-issued RF-TAG are eligible for the refund process. Buyers must not return products to sellers without first obtaining a valid RF-TAG.</p>

        <h3 className="text-lg font-semibold mt-4">10.3 Product Return Procedure</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>The buyer must return the product to the seller within five (5) days of receiving the RF-TAG.</li>
          <li>The product must be returned in the same condition in which it was received — unused, with original packaging, and accompanied by the RF-TAG reference.</li>
          <li>The buyer is responsible for ensuring the product is returned safely.</li>
          <li>Failure to return the product within the five (5) day window will result in the cancellation of the approved refund.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">10.4 Refund Amount</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>The buyer will receive eighty percent (80%) of the original purchase price paid through the BSB Market platform.</li>
          <li>The remaining twenty percent (20%) is retained as a platform handling and processing fee and is non-refundable.</li>
          <li>Refunds will be credited to the buyer's BSB Market wallet or original payment method within a reasonable processing period.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">10.5 Non-Refundable Circumstances</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>The refund request is submitted after the three (3) day reporting window.</li>
          <li>The product has been used, altered, or damaged by the buyer after receipt.</li>
          <li>The buyer fails to return the product within the five (5) day return window.</li>
          <li>The issue reported is a matter of personal preference not related to product quality, description accuracy, or defect.</li>
          <li>The transaction was conducted outside the BSB Market platform.</li>
          <li>The request involves contractor services, promotional earnings, or job listings.</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">10.6 Seller Obligations</h3>
        <p>Sellers are required to cooperate fully with BSB Market Support during the refund review process. Sellers who repeatedly attract refund claims or fail to cooperate with the refund process may face account suspension or removal from the Platform.</p>

        <h2 className="text-xl font-bold mt-8">11. Amendments to These Terms</h2>
        <p>BSB Global Tech Ltd reserves the right to amend these Terms at any time. Where material changes are made, BSB will notify users through the Platform or by email at least fourteen (14) days before the changes take effect.</p>

        <h2 className="text-xl font-bold mt-8">12. Governing Law & Dispute Resolution</h2>
        <p>These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any dispute arising from or in connection with these Terms shall first be subject to good-faith negotiation between the parties. If unresolved within thirty (30) days, the dispute shall be referred to mediation or arbitration in accordance with the Arbitration and Mediation Act, 2023.</p>

        <h2 className="text-xl font-bold mt-8">13. Contact Us</h2>
        <p>If you have any questions, concerns, or complaints regarding these Terms of Use, please contact:</p>
        <p className="font-medium">
          BSB Global Tech Ltd<br />
          Email: bsbmarketteam@gmail.com<br />
          Country: Nigeria
        </p>
      </div>
    </div>
  </div>
);


export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | BSB Market" },
      { name: "description", content: "The rules and conditions for buying, selling, hiring and networking on the BSB Market platform." },
      { property: "og:title", content: "Terms of Use | BSB Market" },
      { property: "og:description", content: "The rules and conditions for buying, selling, hiring and networking on the BSB Market platform." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsOfUse,
});
