import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TechLabel } from '@/components/ui/TechLabel';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const section = 'max-w-3xl mx-auto px-6 py-12 md:px-10';
const h2 = 'font-display text-2xl font-semibold text-ink-50 mt-10 mb-4';
const h3 = 'font-display text-lg font-semibold text-ink-100 mt-8 mb-3';
const h4 = 'font-display text-base font-semibold text-ink-200 mt-6 mb-2';
const p = 'text-sm leading-relaxed text-ink-300 mb-4';
const li = 'text-sm leading-relaxed text-ink-300 mb-2 pl-4';
const strong = 'font-medium text-ink-100';
const link = 'text-accent-cyan underline underline-offset-2 hover:text-cyan-300 transition-colors';

export function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-base-950 pt-24 pb-20">
      <motion.div {...fadeIn} className={section}>
        <div className="mb-8 flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent-cyan" />
          <TechLabel bright>Legal</TechLabel>
        </div>

        <h1 className="font-display text-3xl font-semibold text-ink-50 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-400">Last updated: August 20, 2026</p>

        <p className={p}>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure
          of Your information when You use the Service and tells You about Your privacy rights and how
          the law protects You.
        </p>

        <p className={p}>
          We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your
          information as described in this Privacy Policy and, where required by applicable law, only where
          We have a valid legal basis to do so, including Your consent (where consent is required). This
          Privacy Policy has been created with the help of the{' '}
          <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noreferrer" className={link}>
            Privacy Policy Generator
          </a>.
        </p>

        <h2 className={h2}>Interpretation and Definitions</h2>

        <h3 className={h3}>Interpretation</h3>
        <p className={p}>
          The words whose initial letters are capitalized have meanings defined under the following
          conditions. The following definitions shall have the same meaning regardless of whether they
          appear in singular or in plural.
        </p>

        <h3 className={h3}>Definitions</h3>
        <p className={p}>For the purposes of this Privacy Policy:</p>
        <ul className="mb-6 space-y-3">
          <li className={li}><strong className={strong}>Account</strong> means a unique account created for You to access Our Service or parts of Our Service.</li>
          <li className={li}><strong className={strong}>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li className={li}><strong className={strong}>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to Morphiic Systems (Pvt) Ltd, 17A Flower Road, Colombo 07, Sri Lanka.</li>
          <li className={li}><strong className={strong}>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.</li>
          <li className={li}><strong className={strong}>Country/State</strong> refers to: Sri Lanka.</li>
          <li className={li}><strong className={strong}>Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.</li>
          <li className={li}><strong className={strong}>Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.</li>
          <li className={li}><strong className={strong}>Service</strong> refers to the Website.</li>
          <li className={li}><strong className={strong}>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
          <li className={li}><strong className={strong}>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
          <li className={li}><strong className={strong}>User</strong> means any individual who accesses or uses the Service.</li>
          <li className={li}><strong className={strong}>Website</strong> refers to morphiic, accessible from{' '}<a href="https://morphiic.com/" rel="external nofollow noopener" target="_blank" className={link}>https://morphiic.com/</a>.</li>
          <li className={li}><strong className={strong}>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>

        <h2 className={h2}>Collecting and Using Your Personal Information</h2>

        <h3 className={h3}>Types of Data Collected</h3>

        <h4 className={h4}>Personal Data</h4>
        <p className={p}>
          While using Our Service, We may ask You to provide Us with certain personally identifiable
          information that can be used to contact or identify You. Personally identifiable information may
          include, but is not limited to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li className={li}>Email address</li>
          <li className={li}>First name and last name</li>
          <li className={li}>Phone number</li>
          <li className={li}>Address, State, Province, ZIP/Postal code, City</li>
        </ul>

        <h4 className={h4}>Usage Data</h4>
        <p className={p}>
          Usage Data is collected automatically when using the Service. Usage Data may include information
          such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser
          version, the pages of Our Service that You visit, the time and date of Your visit, the time
          spent on those pages, unique device identifiers and other diagnostic data.
        </p>
        <p className={p}>
          When You access the Service by or through a mobile device, We may collect certain information
          automatically, including, but not limited to, the type of mobile device You use, Your mobile
          device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the
          type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
        </p>

        <h4 className={h4}>Tracking Technologies and Cookies</h4>
        <p className={p}>
          We use tracking technologies (such as cookies) to track the activity and to improve Our Service.
          The technologies We use may include:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li className={li}><strong className={strong}>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of Our Service.</li>
          <li className={li}><strong className={strong}>Web Beacons.</strong> Certain sections of Our Service may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics.</li>
        </ul>
        <p className={p}>
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your
          personal computer or mobile device when You go offline, while Session Cookies are deleted as
          soon as You close Your web browser.
        </p>
        <p className={p}>
          Where required by law, We use non-essential cookies only with Your consent. You can withdraw or
          change Your consent at any time using Our cookie preferences tool (if available) or through Your
          browser/device settings.
        </p>

        <p className={p}>We use both Session and Persistent Cookies for the purposes set out below:</p>
        <ul className="mb-6 space-y-3">
          <li className={li}><strong className={strong}>Necessary / Essential Cookies</strong><br />Type: Session Cookies<br />Administered by: Us<br />Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.</li>
          <li className={li}><strong className={strong}>Cookies Policy / Notice Acceptance Cookies</strong><br />Type: Persistent Cookies<br />Administered by: Us<br />Purpose: These Cookies identify whether users have accepted the use of cookies on the Website and record the consent choices You have made.</li>
          <li className={li}><strong className={strong}>Functionality Cookies</strong><br />Type: Persistent Cookies<br />Administered by: Us<br />Purpose: These Cookies allow Us to remember choices You make when You use the Website, such as remembering Your Account login details or language preference.</li>
        </ul>

        <h3 className={h3}>Use of Your Personal Data</h3>
        <p className={p}>The Company may use Personal Data for the following purposes:</p>
        <ul className="mb-4 list-disc pl-6">
          <li className={li}><strong className={strong}>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</li>
          <li className={li}><strong className={strong}>To manage Your Account:</strong> to manage Your registration as a user of the Service.</li>
          <li className={li}><strong className={strong}>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
          <li className={li}><strong className={strong}>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication regarding updates or informative communications related to the functionalities, products or contracted services.</li>
          <li className={li}><strong className={strong}>To provide You</strong> with news, special offers, and general information about other goods, services and events which We offer that are similar to those that You have already purchased or inquired about.</li>
          <li className={li}><strong className={strong}>To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
          <li className={li}><strong className={strong}>For business transfers:</strong> We may use Your Personal Data to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets.</li>
          <li className={li}><strong className={strong}>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of Our promotional campaigns, and evaluating and improving Our Service.</li>
        </ul>

        <p className={p}>We may share Your Personal Data in the following situations:</p>
        <ul className="mb-6 list-disc pl-6">
          <li className={li}><strong className={strong}>With Service Providers:</strong> We may share Your Personal Data with Service Providers to monitor and analyze the use of Our Service, and to contact You.</li>
          <li className={li}><strong className={strong}>For business transfers:</strong> We may share or transfer Your Personal Data in connection with any merger, sale of Company assets, financing, or acquisition.</li>
          <li className={li}><strong className={strong}>With Affiliates:</strong> We may share Your Personal Data with Our affiliates, in which case We will require those affiliates to honor this Privacy Policy.</li>
          <li className={li}><strong className={strong}>With other users:</strong> If Our Service offers public areas, when You share Personal Data or otherwise interact in the public areas with other users, such information may be viewed by all users.</li>
          <li className={li}><strong className={strong}>With Your consent:</strong> We may disclose Your Personal Data for any other purpose with Your consent.</li>
        </ul>

        <h4 className={h4}>Text Messages Privacy Notice</h4>
        <p className={p}>
          You have the option to receive text (SMS) messages from Us. If You opt in to text messages, We
          will send You updates, notifications, and other communications as described below. When You opt
          in, We will collect and store the information You provide in connection with text messaging,
          such as Your phone number, the date and method of Your consent, and message delivery and read
          information.
        </p>
        <p className={p}>
          No mobile information will be shared with or sold to third parties or affiliates for marketing
          or promotional purposes. The phone numbers and consent records We collect for texting are never
          shared with anyone for any purpose, except the Service Providers that technically have to handle
          them to deliver the texts.
        </p>
        <p className={p}>
          Consent to receive text messages is not a condition of any purchase or use of Our Service. If
          You consent to receive SMS from Us, You agree to receive text messages from Us related to:
        </p>
        <ul className="mb-4 list-disc pl-6">
          <li className={li}>Customer care and support</li>
          <li className={li}>Account notifications, such as activity, status, or renewal reminders</li>
          <li className={li}>Delivery notifications and updates on the status of a delivery</li>
          <li className={li}>Authentication messages, such as one-time passwords (OTP) and passcodes</li>
          <li className={li}>Security alerts, such as suspicious login attempts or unusual account activity</li>
          <li className={li}>Marketing and promotional offers, discounts, and other promotional content</li>
        </ul>
        <p className={p}>
          Reply STOP to opt-out. Reply HELP for support. Message &amp; data rates may apply. Messaging
          frequency may vary. Carriers are not liable for delayed or undelivered messages.
        </p>

        <h3 className={h3}>Retention of Your Personal Data</h3>
        <p className={p}>
          The Company will retain Your Personal Data only for as long as is necessary for the purposes
          set out in this Privacy Policy. We will retain and use Your Personal Data to the extent
          necessary to comply with Our legal obligations, resolve disputes, and enforce Our legal
          agreements and policies.
        </p>
        <p className={p}>
          Where possible, We apply shorter retention periods and/or reduce identifiability by deleting,
          aggregating, or anonymizing data. We apply different retention periods to different categories
          of Personal Data based on the purpose of processing and legal obligations:
        </p>
        <ul className="mb-6 space-y-3">
          <li className={li}><strong className={strong}>Account Information</strong> — User Accounts: retained for the duration of Your Account relationship plus up to 24 months after account closure.</li>
          <li className={li}><strong className={strong}>Customer Support Data</strong> — Support tickets and correspondence: up to 24 months from the date of ticket closure. Chat transcripts: up to 24 months for quality assurance.</li>
          <li className={li}><strong className={strong}>Usage Data</strong> — Website analytics data (cookies, IP addresses, device identifiers): up to 24 months. Server logs: up to 24 months for security monitoring.</li>
        </ul>

        <h3 className={h3}>Transfer of Your Personal Data</h3>
        <p className={p}>
          Your information, including Personal Data, is processed at the Company&apos;s operating offices
          and in any other places where the parties involved in the processing are located. This means
          that this information may be transferred to — and maintained on — computers located outside of
          Your state, province, country or other governmental jurisdiction where the data protection laws
          may differ from those of Your jurisdiction.
        </p>

        <h3 className={h3}>Delete Your Personal Data</h3>
        <p className={p}>
          You have the right to delete or request that We assist in deleting the Personal Data that We
          have collected about You. Our Service may give You the ability to delete certain information
          about You from within the Service. You may also contact Us to request access to, correct, or
          delete any Personal Data that You have provided to Us.
        </p>

        <h3 className={h3}>Disclosure of Your Personal Data</h3>

        <h4 className={h4}>Business Transactions</h4>
        <p className={p}>
          If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be
          transferred. We will provide notice before Your Personal Data is transferred and becomes subject
          to a different Privacy Policy.
        </p>

        <h4 className={h4}>Law Enforcement</h4>
        <p className={p}>
          Under certain circumstances, the Company may disclose Your Personal Data if required to do so by
          law or in response to valid requests by public authorities (e.g. a court or a government
          agency).
        </p>

        <h4 className={h4}>Other Legal Requirements</h4>
        <p className={p}>The Company may disclose Your Personal Data in the good-faith belief that such action is necessary to:</p>
        <ul className="mb-6 list-disc pl-6">
          <li className={li}>Comply with a legal obligation</li>
          <li className={li}>Protect and defend the rights or property of the Company</li>
          <li className={li}>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li className={li}>Protect the personal safety of Users of the Service or the public</li>
          <li className={li}>Protect against legal liability</li>
        </ul>

        <h3 className={h3}>Security of Your Personal Data</h3>
        <p className={p}>
          The security of Your Personal Data is important to Us, but remember that no method of
          transmission over the Internet, or method of electronic storage, is 100% secure. While We
          strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </p>

        <h2 className={h2}>Children&apos;s and Minors&apos; Privacy</h2>
        <p className={p}>
          The Service is not directed to, and We do not knowingly collect Personal Information from,
          anyone under the age of 16. If You are a parent or guardian and You believe Your child has
          provided Us with Personal Information, please contact Us. If We become aware that We have
          collected Personal Information from anyone under the age of 16, We will take steps to remove
          that information from Our servers as soon as reasonably possible.
        </p>

        <h2 className={h2}>Links to Other Websites</h2>
        <p className={p}>
          Our Service may contain links to other websites that are not operated by Us. If You click on a
          third-party link, You will be directed to that third party&apos;s site. We strongly advise You to
          review the Privacy Policy of every site You visit.
        </p>

        <h2 className={h2}>Changes to this Privacy Policy</h2>
        <p className={p}>
          We may update Our Privacy Policy from time to time. We will notify You of any changes by posting
          the new Privacy Policy on this page. We will let You know via email and/or a prominent notice on
          Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at
          the top of this Privacy Policy.
        </p>

        <h2 className={h2}>Contact Us</h2>
        <p className={p}>If You have any questions about this Privacy Policy, You can contact Us:</p>
        <ul className="mb-6 list-disc pl-6">
          <li className={li}>By email: <a href="mailto:support@morphiic.com" className={link}>support@morphiic.com</a></li>
          <li className={li}>By visiting this page on Our Website: <a href="https://morphiic.com/" rel="external nofollow noopener" target="_blank" className={link}>https://morphiic.com/</a></li>
          <li className={li}>By phone: +94 11 283 6154</li>
          <li className={li}>By mail: 17A Flower Road, Colombo 07, Sri Lanka</li>
        </ul>
      </motion.div>
    </div>
  );
}
