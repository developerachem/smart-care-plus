import Link from "next/link";
import footerCss from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={footerCss.footer}>
      <Link href="/">
        <Image
          src="https://staging-sc.arcapps.org/assets/img/for%201.png"
          alt=""
          width={100}
          height={50}
        />
      </Link>
      <Link href="/">
        <Image
          src="https://staging-sc.arcapps.org/assets/img/For2.png"
          alt=""
          width={100}
          height={50}
        />
      </Link>
      <Link href="/">
        <Image
          src="https://staging-sc.arcapps.org/assets/img/for%203.png"
          alt=""
          width={100}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Footer;
