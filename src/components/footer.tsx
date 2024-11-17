import { ArrowLeft, BookUser, Headset, Info } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";




export function Footer(){

  return (
    <div className="w-full py-10 bg-primary space-y-6">
      <div className="container rounded-xl p-2  sm:p-10 bg-background flex justify-between items-end">
        <Button><ArrowLeft /></Button>

        <div className="flex flex-col items-end sm:gap-20">
          <Headset className="size-10" />
          <h2>Оставьте обратную связь - ответим на все вопросы!</h2>
        </div>
      </div>
      <div className="container mx-auto flex justify-center">
          <Link  href={"/about"}><Button variant="link" className="space-x-2 text-primary-foreground"><Info className="size-6" /> <h3>About</h3></Button></Link>
          <Link  href={"/contacts"}><Button variant="link" className="space-x-2 text-primary-foreground"><BookUser className="size-6" /><h3>Contacts</h3></Button></Link>
      </div>
      <div className="w-[90%] border-[0.5px] bg-white  mx-auto" />
      <p className="text-center text-[16px] text-white opacity-60">2024 Все права защищены</p>
    </div>
  )
}
