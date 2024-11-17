import { ReactNode } from "react";
import { Footer } from "~/components/footer";
import { NavBar } from "~/components/Navbar";



export default function MainLayout({ children }:
  {
    children:ReactNode
  }){



  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}
