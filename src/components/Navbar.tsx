import { BookUser, Info, User } from "lucide-react"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { Button } from "./ui/button"



export async function NavBar(){
  const session = await getServerSession()

  return (
    <div className="w-full bg-primary h-12 flex items-center justify-between gap-2 px-5 absolute top-0">
      <span>
        <Link  href={"/about"}><Button variant="link" className="space-x-2 text-primary-foreground"><Info className="size-6" /> <h3>About</h3></Button></Link>
        <Link  href={"/contacts"}><Button variant="link" className="space-x-2 text-primary-foreground"><BookUser className="size-6" /><h3>Contacts</h3></Button></Link>
      </span>
      {
        session ? (
          <Link href="/profile"><Button variant="link" className="space-x-2 text-primary-foreground"><User/><h3>{session.user.name || session.user.email}</h3></Button></Link>
        ) : (
          <Link href="/auth/signin"><Button variant="link" className="space-x-2 text-primary-foreground"><User/><h3>Signin</h3></Button></Link>
        )
      }

    </div>
  )
}
