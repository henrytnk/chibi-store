import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="w-fit">
      <Image
        src={"/chibi-store-navbar-logo.png"}
        width={50}
        height={50}
        alt="Chibi Store Navbar Logo"
      />
    </Link>
  );
};

export default Logo;
