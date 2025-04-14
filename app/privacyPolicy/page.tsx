import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Privacy Policy for Jobipo</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: 14/04/2025</p>
        <p className="text-gray-700 mb-4">
          Jobipo is a commercial app by Adshrtech Media Private Limited (“Jobipo”). This page informs visitors about our
          policies regarding the collection, use, and disclosure of personal information for anyone using the Jobipo app
          and website (“Jobipo Platform”). By accessing or using the Jobipo Platform, you agree to the terms of this
          Privacy Policy and our Terms of Service.
        </p>
        <p className="text-gray-700 mb-6">
          We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your
          information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
        <h3 className="text-xl font-medium text-gray-800 mb-2">a. Personal Identification Information</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Your full name, email address, mobile number, and date of birth help us create and verify your account.</li>
          <li>Gender is collected to personalize job listings or for employer requirements where applicable.</li>
          <li>Profile photo may be used to create a professional identity on your profile.</li>
          <li>
            We also collect your PAN card details to comply with income tax regulations in India, and your bank account
            details for processing affiliate payouts securely.
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mb-2">b. Professional and Job-Related Information</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>
            We collect your resume/CV, education background, work experience, skills, job preferences, and languages
            known so that we can match you with suitable job opportunities.
          </li>
          <li>This information may be shared with potential employers and recruiters who use Jobipo for hiring.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mb-2">c. Usage and Technical Information</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>
            We automatically collect data such as your IP address, browser type, device information, operating system,
            and location data (if permission is granted) to optimize your experience on the platform.
          </li>
          <li>
            We also gather usage behavior, such as pages visited, time spent on each page, buttons clicked, etc., to
            improve app and website performance.
          </li>
        </ul>

        <h3 className="text-xl font-medium text-gray-800 mb-2">d. Contacts Access (Optional)</h3>
        <p className="text-gray-700 mb-6">
          If you choose to grant us permission, we may access your phone contacts to assist with referrals, affiliate
          marketing, or networking within the platform. This is completely optional and requires your explicit consent.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>To create, manage, and secure your Jobipo account</li>
          <li>To recommend jobs that match your profile and connect you with verified employers</li>
          <li>To process affiliate payouts, manage TDS deductions, and send relevant financial notifications</li>
          <li>To send alerts, notifications, emails, or SMS regarding new job openings or important updates</li>
          <li>To improve platform functionality, customize content, and enhance user experience</li>
          <li>To ensure platform security, detect suspicious activity, and prevent fraud</li>
          <li>To comply with legal obligations and regulatory requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Sharing of Information</h2>
        <p className="text-gray-700 mb-6">
          We do not sell your personal data to third parties. However, your information may be shared with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Verified employers and recruiters looking to hire candidates matching your profile</li>
          <li>
            Financial institutions and payment gateways for processing affiliate earnings and verifying bank account
            details
          </li>
          <li>Tax authorities, in case of legal obligation to report income and TDS deductions</li>
          <li>
            Third-party service providers, such as cloud storage providers, communication tools, or analytics services
            that help us run the platform efficiently
          </li>
          <li>Law enforcement agencies, if required by court order or applicable law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Retention</h2>
        <p className="text-gray-700 mb-6">
          We retain your data for as long as your account remains active, as necessary to comply with legal, tax, and
          regulatory requirements, and to resolve disputes and enforce our agreements. If you wish to delete your account
          or personal information, you can do so by emailing us at support@jobipo.com.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
          <li>Access and update your profile information through the app or website</li>
          <li>Request deletion of your account and associated personal data</li>
          <li>Withdraw consent for permissions such as location or contacts access</li>
          <li>Request information on your affiliate payments or TDS deductions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
        <p className="text-gray-700">
          For any questions, complaints, or feedback related to privacy or data protection, please contact us:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Email: support@jobipo.com</li>
          <li>Website: www.jobipo.in</li>
          <li>
            Address: Shop 17, 18 Ganesh Nagar, Benar Road Nadi Ka Phatak, Neendar, Jaipur, Jaipur-302013 Rajasthan
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;