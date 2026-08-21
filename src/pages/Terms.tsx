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

export function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-base-950 pt-24 pb-20">
      <motion.div {...fadeIn} className={section}>
        <div className="mb-8 flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-accent-cyan" />
          <TechLabel bright>Legal</TechLabel>
        </div>

        <h1 className="font-display text-3xl font-semibold text-ink-50 sm:text-4xl">Terms and Conditions</h1>
        <p className="mt-2 text-sm text-ink-400">Last updated: August 20, 2026</p>

        <p className={p}>Please read these terms and conditions carefully before using Our Service.</p>

        <h2 className={h2}>Interpretation and Definitions</h2>

        <h3 className={h3}>Interpretation</h3>
        <p className={p}>
          The words whose initial letters are capitalized have meanings defined under the following
          conditions. The following definitions shall have the same meaning regardless of whether they
          appear in singular or in plural.
        </p>

        <h3 className={h3}>Definitions</h3>
        <p className={p}>For the purposes of these Terms and Conditions:</p>
        <ul className="mb-6 space-y-3">
          <li className={li}><strong className={strong}>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li className={li}><strong className={strong}>Country/State</strong> refers to: Sri Lanka</li>
          <li className={li}><strong className={strong}>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to Morphiic Systems (Pvt) Ltd, 17A Flower Road, Colombo 07, Sri Lanka.</li>
          <li className={li}><strong className={strong}>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
          <li className={li}><strong className={strong}>Service</strong> refers to the Website.</li>
          <li className={li}><strong className={strong}>Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the{' '}<a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" rel="noreferrer" className={link}>TermsFeed Terms and Conditions Generator</a>.</li>
          <li className={li}><strong className={strong}>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</li>
          <li className={li}><strong className={strong}>Website</strong> refers to morphiic, accessible from{' '}<a href="https://morphiic.com/" rel="external nofollow noopener" target="_blank" className={link}>https://morphiic.com/</a></li>
          <li className={li}><strong className={strong}>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
        </ul>

        <h2 className={h2}>Acknowledgment</h2>
        <p className={p}>
          These are the Terms and Conditions governing the use of this Service and the agreement
          between You and the Company. These Terms and Conditions set out the rights and obligations
          of all users regarding the use of the Service.
        </p>
        <p className={p}>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance
          with these Terms and Conditions. These Terms and Conditions apply to all visitors, users
          and others who access or use the Service.
        </p>
        <p className={p}>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If
          You disagree with any part of these Terms and Conditions then You may not access the
          Service.
        </p>
        <p className={p}>
          You represent that you are over the age of 18. The Company does not permit those under 18
          to use the Service.
        </p>
        <p className={p}>
          Your access to and use of the Service is also subject to Our Privacy Policy, which describes
          how We collect, use, and disclose personal information. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>

        <h2 className={h2}>Links to Other Websites</h2>
        <p className={p}>
          Our Service may contain links to third-party websites or services that are not owned or
          controlled by the Company.
        </p>
        <p className={p}>
          The Company has no control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third-party websites or services. You further acknowledge and
          agree that the Company shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with the use of or reliance
          on any such content, goods or services available on or through any such websites or services.
        </p>
        <p className={p}>
          We strongly advise You to read the terms and conditions and privacy policies of any
          third-party websites or services that You visit.
        </p>

        <h3 className={h3}>Links from a Third-Party Social Media Service</h3>
        <p className={p}>
          The Service may display, include, make available, or link to content or services provided by a
          Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled
          by the Company, and the Company does not endorse or assume responsibility for any Third-Party
          Social Media Service.
        </p>
        <p className={p}>
          You acknowledge and agree that the Company shall not be responsible or liable, directly or
          indirectly, for any damage or loss caused or alleged to be caused by or in connection with
          Your access to or use of any Third-Party Social Media Service, including any content, goods,
          or services made available through them. Your use of any Third-Party Social Media Service is
          governed by that Third-Party Social Media Service&apos;s terms and privacy policies.
        </p>

        <h2 className={h2}>Termination</h2>
        <p className={p}>
          We may terminate or suspend Your access immediately, without prior notice or liability, for
          any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>
        <p className={p}>Upon termination, Your right to use the Service will cease immediately.</p>

        <h2 className={h2}>Limitation of Liability</h2>
        <p className={p}>
          Notwithstanding any damages that You might incur, the entire liability of the Company and
          any of its suppliers under any provision of these Terms and Your exclusive remedy for all of
          the foregoing shall be limited to the amount actually paid by You through the Service or 100
          USD if You haven&apos;t purchased anything through the Service.
        </p>
        <p className={p}>
          To the maximum extent permitted by applicable law, in no event shall the Company or its
          suppliers be liable for any special, incidental, indirect, or consequential damages
          whatsoever (including, but not limited to, damages for loss of profits, loss of data or
          other information, for business interruption, for personal injury, loss of privacy arising
          out of or in any way related to the use of or inability to use the Service, third-party
          software and/or third-party hardware used with the Service, or otherwise in connection with
          any provision of these Terms), even if the Company or any supplier has been advised of the
          possibility of such damages and even if the remedy fails of its essential purpose.
        </p>
        <p className={p}>
          Some states do not allow the exclusion of implied warranties or limitation of liability for
          incidental or consequential damages, which means that some of the above limitations may not
          apply. In these states, each party&apos;s liability will be limited to the greatest extent
          permitted by law.
        </p>

        <h2 className={h2}>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h2>
        <p className={p}>
          The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects
          without warranty of any kind. To the maximum extent permitted under applicable law, the
          Company, on its own behalf and on behalf of its Affiliates and its and their respective
          licensors and service providers, expressly disclaims all warranties, whether express,
          implied, statutory or otherwise, with respect to the Service, including all implied
          warranties of merchantability, fitness for a particular purpose, title and non-infringement,
          and warranties that may arise out of course of dealing, course of performance, usage or
          trade practice.
        </p>
        <p className={p}>
          Without limiting the foregoing, neither the Company nor any of the company&apos;s provider makes
          any representation or warranty of any kind, express or implied: (i) as to the operation or
          availability of the Service, or the information, content, and materials or products included
          thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the
          accuracy, reliability, or currency of any information or content provided through the
          Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on
          behalf of the Company are free of viruses, scripts, trojan horses, worms, malware,
          timebombs or other harmful components.
        </p>
        <p className={p}>
          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations
          on applicable statutory rights of a consumer, so some or all of the above exclusions and
          limitations may not apply to You. But in such a case the exclusions and limitations set
          forth in this section shall be applied to the greatest extent enforceable under applicable
          law.
        </p>

        <h2 className={h2}>Governing Law</h2>
        <p className={p}>
          The laws of the Country/State, excluding its conflicts of law rules, shall govern these
          Terms and Your use of the Service. Your use of the Application may also be subject to other
          local, state, national, or international laws.
        </p>

        <h2 className={h2}>Disputes Resolution</h2>
        <p className={p}>
          If You have any concern or dispute about the Service, You agree to first try to resolve the
          dispute informally by contacting the Company.
        </p>

        <h2 className={h2}>For European Union (EU) Users</h2>
        <p className={p}>
          If You are a European Union consumer, you will benefit from any mandatory provisions of the
          law of the country in which You are resident.
        </p>

        <h2 className={h2}>United States Legal Compliance</h2>
        <p className={p}>
          You represent and warrant that (i) You are not located in a country that is subject to the
          United States government embargo, or that has been designated by the United States government
          as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States
          government list of prohibited or restricted parties.
        </p>

        <h2 className={h2}>Severability and Waiver</h2>

        <h3 className={h3}>Severability</h3>
        <p className={p}>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will
          be changed and interpreted to accomplish the objectives of such provision to the greatest
          extent possible under applicable law and the remaining provisions will continue in full force
          and effect.
        </p>

        <h3 className={h3}>Waiver</h3>
        <p className={p}>
          Except as provided herein, the failure to exercise a right or to require performance of an
          obligation under these Terms shall not affect a party&apos;s ability to exercise such right or
          require such performance at any time thereafter nor shall the waiver of a breach constitute a
          waiver of any subsequent breach.
        </p>

        <h2 className={h2}>Translation Interpretation</h2>
        <p className={p}>
          These Terms and Conditions may have been translated if We have made them available to You on
          our Service. You agree that the original English text shall prevail in the case of a
          dispute.
        </p>

        <h2 className={h2}>Changes to These Terms and Conditions</h2>
        <p className={p}>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time.
          If a revision is material We will make reasonable efforts to provide at least 30 days&apos;
          notice prior to any new terms taking effect. What constitutes a material change will be
          determined at Our sole discretion.
        </p>
        <p className={p}>
          By continuing to access or use Our Service after those revisions become effective, You agree
          to be bound by the revised terms. If You do not agree to the new terms, in whole or in
          part, please stop using the Service.
        </p>

        <h2 className={h2}>Contact Us</h2>
        <p className={p}>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul className="mb-6 list-disc pl-6">
          <li className={li}>By email: <a href="mailto:support@morphiic.com" className={link}>support@morphiic.com</a></li>
          <li className={li}>By visiting this page on our website: <a href="https://morphiic.com/" rel="external nofollow noopener" target="_blank" className={link}>https://morphiic.com/</a></li>
          <li className={li}>By phone: +94 11 283 6154</li>
          <li className={li}>By mail: 17A Flower Road, Colombo 07, Sri Lanka</li>
        </ul>
      </motion.div>
    </div>
  );
}
