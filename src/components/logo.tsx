
import Image, { type StaticImageData } from "next/image"
import LogoSvg from "public/logo.svg"
import { cn } from "~/lib/client/utils"



export function Logo({ className }:
  {
    className?:string
  }){

  return (
    <Image
      src={LogoSvg as StaticImageData}
      alt="Fast Voiting"
      className={cn(className)}
    />
  )
}
