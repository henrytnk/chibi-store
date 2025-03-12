import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/chibi-store-logo.png"}
        width={90}
        height={90}
        alt="Chibi Store Logo"
      />
    </Link>
  );
};

export default Logo;
