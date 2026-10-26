
export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with Next.js · Deployed on Vercel
      </p>

      <p>
        © {new Date().getFullYear()} Phat Dat (David) Nguyen.
        All rights reserved.
      </p>
    </footer>
  );
}
