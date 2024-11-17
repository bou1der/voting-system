"use client"
import Globe, { GLOBE_CONFIG } from "~/components/ui/globe";
import { cn } from "~/lib/client/utils";



export function Globus({ className }:
  {
    className?:string
  }){

  return <Globe className={cn(className)} config={{...GLOBE_CONFIG, dark:1}} />
}
