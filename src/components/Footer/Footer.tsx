import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-8 mt-auto border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
        {/* 版權宣告 */}
        <div className="flex flex-col gap-2">
          <div>
            <p>電子信箱：<a href="mailto:marryhan25648@gmail.com" target="_blank" rel="noopener">marryhan25648@gmail.com</a></p>
            <p>Line：@wayneop2500</p>
          </div>
          <p>
            © {new Date().getFullYear()} Go to future Development. All rights
            reserved.
          </p>
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
