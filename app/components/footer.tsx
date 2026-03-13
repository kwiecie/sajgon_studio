import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const linkClasses = "h-7 w-7 hover:opacity-70 transition";

export default function Footer() {
  return (
    <footer className="w-full mx-0 text-[#ffffff] bg-light-blue flex md:flex-row flex-col justify-between">
      <div className="flex flex-col gap-4 p-8 text-left md:pl-16 justify-stretch">
        <div className="md:w-150 h-0.5 bg-white md:pl-8"></div>
        <div className="flex flex-row gap-4 md:p-8 text-left">
          <Link
            href="https://www.instagram.com/sajgon_studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/insta_icon.png"
              alt="Instagram"
              width={30}
              height={30}
              className={linkClasses}
            />
          </Link>
          <Link
            href="https://www.facebook.com/sajgon.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook_icon.png"
              alt="Facebook"
              width={30}
              height={30}
              className={linkClasses}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/sajgon-studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin_icon.png"
              alt="LinkedIn"
              width={30}
              height={30}
              className={linkClasses}
            />
          </Link>
          <Link
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/whatsup_icon.png"
              alt="WhatsApp"
              width={30}
              height={30}
              className={linkClasses}
            />
          </Link>
        </div>
      </div>

      <div className=" gap-4 md:p-8 p-4 text-left">
        <h2 className="text-small">Sajgon</h2>© {new Date().getFullYear()}{" "}
        kwiecie
      </div>
    </footer>
  );
}
