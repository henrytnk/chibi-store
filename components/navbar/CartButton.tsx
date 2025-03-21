import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  const numItemsInCart = 10;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="flex items-center justify-center text-xs absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
