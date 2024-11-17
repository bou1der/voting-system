import AnimatedGradientText from "~/components/ui/animated-gradient-text";
import { cn } from "~/lib/client/utils";
import { Globus } from "./globe";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Info, User } from "lucide-react";

export async function WelcomeBlock(){
  const session = await getServerSession()

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col gap-6 relative">
        <AnimatedGradientText 
          className="z-10 bg-white/0"
        >
          <span className={cn(" p-3 text-2xl sm:text-5xl text-center inline animate-gradient bg-gradient-to-r from-[#1a5fb4] via-[#62a0ea] to-[#1a5fb4] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent")}>Проголосуй сейчас!</span>
        </AnimatedGradientText>
        <div className="z-10 flex justify-center gap-4 ">
            {
              session ? (
                <Link href="/voites"><Button variant="ghost" className="backdrop-blur border space-x-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground"><Info className="size-5" /><p>Голосования</p></Button></Link>
              ):
              (
                <Link href="/auth/signin"><Button variant="ghost" className="backdrop-blur border space-x-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground"><User className="size-5" /><p>Войти</p></Button></Link>
              )
            }
            <Link href="/about"><Button variant="ghost" className=" backdrop-blur border space-x-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground"><Info className="size-5" /><p>О нас</p></Button></Link>
        </div>
        <Globus className="-top-60" />
      </div>
    </div>
  )
}
