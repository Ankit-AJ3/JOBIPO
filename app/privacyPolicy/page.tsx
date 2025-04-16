import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Privacy Policy for Jobipo
        </h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: 14/04/2025</p>

        <p className="mb-4">
          Jobipo is a commercial app by Adshrtech Media Private Limited (“Jobipo”). This page informs visitors about our policies regarding the collection, use, and disclosure of personal information for anyone using the Jobipo app and website (“Jobipo Platform”). By accessing or using the Jobipo Platform, you agree to the terms of this Privacy Policy and our Terms of Service.
        </p>
        <p className="mb-6">
          We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>

        <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
        <p className="mb-2 font-semibold">a. Personal Identification Information</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Your full name, email address, mobile number, and date of birth help us create and verify your account.</li>
          <li>Gender is collected to personalize job listings or for employer requirements where applicable.</li>
          <li>Profile photo may be used to create a professional identity on your profile.</li>
          <li>We also collect your PAN card details to comply with income tax regulations in India, and your bank account details for processing affiliate payouts securely.</li>
        </ul>

        <p className="mb-2 font-semibold">b. Professional and Job-Related Information</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Resume/CV, education background, work experience, skills, job preferences, and languages known.</li>
          <li>This information may be shared with potential employers and recruiters who use Jobipo for hiring.</li>
        </ul>

        <p className="mb-2 font-semibold">c. Usage and Technical Information</p>
        <ul className="list-disc pl-6 mb-4">
          <li>IP address, browser type, device information, OS, and location data (if permission is granted).</li>
          <li>Usage behavior like pages visited, time spent, clicks, etc.</li>
        </ul>

        <p className="mb-2 font-semibold">d. Contacts Access (Optional)</p>
        <p className="mb-4">If you choose to grant us permission, we may access your phone contacts to assist with referrals, affiliate marketing, or networking within the platform. This is completely optional and requires your explicit consent.</p>

        <h2 className="text-xl font-bold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Create, manage, and secure your Jobipo account</li>
          <li>Recommend jobs and connect you with employers</li>
          <li>Process affiliate payouts, manage TDS, send financial alerts</li>
          <li>Send job alerts, updates, notifications</li>
          <li>Improve platform performance and content customization</li>
          <li>Ensure security, detect fraud, and comply with laws</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">3. Sharing of Information</h2>
        <p className="mb-2">We do not sell your personal data. However, it may be shared with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Verified employers and recruiters</li>
          <li>Financial institutions/payment gateways</li>
          <li>Tax authorities if legally required</li>
          <li>Third-party tools for cloud, analytics, or communication</li>
          <li>Law enforcement if required by law</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">4. Data Retention</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>While account remains active</li>
          <li>To meet legal and business requirements</li>
        </ul>
        <p className="mb-4">
          To delete your data, email <b>support@jobipo.com</b>. Some data may be retained for compliance reasons.
        </p>

        <h2 className="text-xl font-bold mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Access/update your info</li>
          <li>Request deletion of data</li>
          <li>Withdraw consent for optional permissions</li>
          <li>Request affiliate or tax-related information</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">6. Trust & Safety</h2>
        <p className="mb-4">
          While we monitor the platform, we cannot guarantee user authenticity. We recommend verifying identities, avoiding sharing sensitive data, and reporting abuse to <b>support@jobipo.com</b>.
        </p>

        <h2 className="text-xl font-bold mb-2">7. Cookies</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Remember sessions</li>
          <li>Personalize recommendations</li>
          <li>Analyze behavior</li>
          <li>Enable features like chat or alerts</li>
        </ul>
        <p className="mb-4">You can manage cookies in your browser. Disabling them may impact some platform functionality.</p>

        <h2 className="text-xl font-bold mb-2">8. Disclaimer</h2>
        <p className="mb-4">
          Jobipo does not take responsibility for user interactions. Please verify all opportunities independently. We only facilitate connections.
        </p>

        <h2 className="text-xl font-bold mb-2">9. Children’s Privacy</h2>
        <p className="mb-4">
          Jobipo is for users 18+. If a child has submitted data, we will delete it immediately upon discovery.
        </p>

        <h2 className="text-xl font-bold mb-2">10. Data Security</h2>
        <p className="mb-4">
          We use industry-standard practices like SSL encryption and access control. However, 100% security cannot be guaranteed. Users should maintain strong passwords and avoid public sharing.
        </p>

        <h2 className="text-xl font-bold mb-2">11. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy and notify you via app, email, or website. Continued use implies acceptance of the new terms.
        </p>

        <h2 className="text-xl font-bold mb-2">12. Contact Us</h2>
        <p>
          📧 Email: <b>support@jobipo.com</b><br />
          🌐 Website: <b>www.jobipo.in</b><br />
          🏢 Company: <b>Adshrtech Media Private Limited</b><br />
          📍 Address: Shop 17,18 Ganesh Nagar, Benar Road Nadi Ka Phatak, Neendar, Jaipur - 302013, Rajasthan
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
