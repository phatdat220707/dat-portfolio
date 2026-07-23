export const metadata = {
  title: "Privacy Policy | Dat Nguyen",
  description: "Privacy policy for Dat Nguyen's portfolio website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legalPage">
      <h1>Privacy Policy</h1>
      <p className="legalDate">Last updated: July 23, 2026</p>

      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how this portfolio website handles
          information. This website is a personal portfolio created by Dat
          Nguyen to showcase learning progress, projects, and contact
          information.
        </p>
      </section>

      <section>
        <h2>Information Collected</h2>
        <p>
          This website does not directly collect personal information from
          visitors through forms, accounts, or payments. If you contact me by
          email, your email address and message will only be used to respond to
          your inquiry.
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          This website is hosted on Vercel and may use standard hosting logs or
          analytics provided by third-party platforms. These services may process
          basic technical information such as browser type, device information,
          and IP address for security and performance purposes.
        </p>
      </section>

      <section>
        <h2>External Links</h2>
        <p>
          This website may include links to external websites such as GitHub. I
          am not responsible for the privacy practices or content of external
          websites.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact
          me at datnguyen220707@gmail.com.
        </p>
      </section>
    </main>
  );
}