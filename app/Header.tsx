
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 sm:px-2">
        <Link href="./" className="font-bold text-lg" prefetch={false}>
          <h6><b><i>Stulligent</i></b></h6>
        </Link>
        <nav className="hidden space-x-4 md:flex">
        <Link href="/" className="flex items-center space-x-2 text-sm font-medium hover:underline" prefetch={false}>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            </Avatar>
            Home
          </Link>
          <Link href="/chatbot" className="flex items-center space-x-2 text-sm font-medium hover:underline" prefetch={false}>

          <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
          </Avatar>

            ChatBot
          </Link>
          <Link href="/services" className="flex items-center space-x-2 text-sm font-medium hover:underline" prefetch={false}>

          <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
          </Avatar>

            Services
          </Link>

        </nav>
      </div>
    </header>
  )
}