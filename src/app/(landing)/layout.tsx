import { ReactNode } from "react";
import { NavBar } from "~/components/Navbar";



export default function MainLayout({ children }:
  {
    children:ReactNode
  }){



  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}
