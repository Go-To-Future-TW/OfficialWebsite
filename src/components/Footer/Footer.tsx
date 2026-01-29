import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-auto border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        {/* 版權宣告 */}
        <div>
          © {new Date().getFullYear()} Go to future Development. All rights
          reserved.
        </div>

        <Link
          href="/privacy"
          className="hover:text-neutral-300 transition underline underline-offset-2"
        >
          隱私權政策
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
