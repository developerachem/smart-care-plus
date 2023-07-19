"use client";
import Link from "next/link";

const Button = ({ type, title, link, style, className }) => {
  switch (type) {
    case "submit":
      return (
        <button
          className={`btn text-white ${className}`}
          style={{ backgroundColor: "var(--primary)" }}
          type="submit"
        >
          {title}
        </button>
      );

    case "link":
      return (
        <Link href={link} style={style} className={`${className} btn`}>
          {title}
        </Link>
      );

    case "button":
      return (
        <button className="btn w-full mt-3" type="button" style={style}>
          {title}
        </button>
      );

    default:
      break;
  }
};

export default Button;
