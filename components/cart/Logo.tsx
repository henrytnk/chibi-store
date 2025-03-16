import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href={"/"}>
        <Image
          src={"/chibi-store-logo.png"}
          width={900}
          height={900}
          alt="Chibi Store Logo"
        />
      </Link>
    </Button>
  );
};

export default Logo;
