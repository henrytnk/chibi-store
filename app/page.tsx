import { Button } from "@/components/ui/button";
import { manrope } from "./_ui/fonts";

const HomePage = () => {
  return (
    <>
      <h1 className={`${manrope.className} text-2xl mb-2`}>Welcome to Chibi Store!</h1>
      <p className="mb-4">Authentic Japanese & Asian Goods, Shipped Worldwide.</p>
      <div className="flex gap-4">
        <Button variant='outline' size='default' >
          First Button
        </Button>
        <Button variant='secondary' size='default' >
          Secondary Button
        </Button>
      </div>
    </>
  )
}

export default HomePage