import Image from "next/image";

const Logo = ({ className, style }) => {
  return (
    <Image
      src="https://staging-sc.arcapps.org/assets/img/zambia.png"
      alt=""
      className={className}
      style={style}
      height={100}
      width={100}
    />
  );
};

export default Logo;
