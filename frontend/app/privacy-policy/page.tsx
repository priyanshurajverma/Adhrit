import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Adhrit Technologies',
  description: 'Privacy Policy for Adhrit Technologies.',
};

export default function PrivacyPolicy() {
  return (
    <main className="w-full bg-white pt-24 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-deep-blue mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p>
            At Adhrit Technologies, accessible from adhrittechnologies.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Adhrit Technologies and how we use it.
          </p>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">Log Files</h2>
          <p>
            Adhrit Technologies follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at sales@adhrittechnologies.in.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
