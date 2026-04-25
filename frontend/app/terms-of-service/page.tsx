import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Adhrit Technologies',
  description: 'Terms of Service for Adhrit Technologies.',
};

export default function TermsOfService() {
  return (
    <main className="w-full bg-white pt-24 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow max-w-4xl mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-deep-blue mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p>Welcome to Adhrit Technologies!</p>

          <p>
            These terms and conditions outline the rules and regulations for the use of Adhrit Technologies's Website, located at adhrittechnologies.in.
          </p>

          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Adhrit Technologies if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Adhrit Technologies, you agreed to use cookies in agreement with the Adhrit Technologies's Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">License</h2>
          <p>
            Unless otherwise stated, Adhrit Technologies and/or its licensors own the intellectual property rights for all material on Adhrit Technologies. All intellectual property rights are reserved. You may access this from Adhrit Technologies for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republish material from Adhrit Technologies</li>
            <li>Sell, rent or sub-license material from Adhrit Technologies</li>
            <li>Reproduce, duplicate or copy material from Adhrit Technologies</li>
            <li>Redistribute content from Adhrit Technologies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-deep-blue mt-8">Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
