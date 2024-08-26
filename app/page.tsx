
import Link from "next/link"
import { Button } from "@/components/ui/button"
import  Header  from "@/app/Header"
import  Footer  from "@/app/Footer"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                AI Chatbot for First-Year Students
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Get personalized help with scheduling, course selection, and more. Our AI chatbot is here to support you
                throughout your first year.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                
                <Button>
                  <Link href="/chatbot" prefetch={false}>
                    Try the Chatbot
                  </Link>
                </Button>

                <Button >
                  <Link href="/services" prefetch={false}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/photo4.jpg"
                width={300}
                height={300}
                alt="Student 1"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/photo2.jpg"
                width={300}
                height={300}
                alt="Student 2"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/photo3.jpg"
                width={300}
                height={300}
                alt="Student 3"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <img
                src="/photo5.jpg"
                width={300}
                height={300}
                alt="Student 4"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How the Chatbot Can Help</h2>
              <p className="text-muted-foreground md:text-xl">
                Our AI-powered chatbot is designed to assist first-year students with a variety of tasks and questions.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CalendarIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Schedule Help</h3>
                <p className="mt-2 text-muted-foreground">
                  Get personalized guidance on building your class schedule and managing your time.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BookOpenIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Course Selection</h3>
                <p className="mt-2 text-muted-foreground">
                  Explore course options, get recommendations, and make informed decisions about your classes.
                </p>
              </div>
              <div className="rounded-lg bg-muted p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageCircleQuestionIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">General Support</h3>
                <p className="mt-2 text-muted-foreground">
                  Get answers to your questions about campus life, resources, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="/404" prefetch={false}>
              About Us
            </Link>
            <Link href="404" prefetch={false}>
              Our Team
            </Link>
            <Link href="404" prefetch={false}>
              Careers
            </Link>
            <Link href="404" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="404" prefetch={false}>
              AI Chatbot
            </Link>
            <Link href="404" prefetch={false}>
              Student Planner
            </Link>
            <Link href="404" prefetch={false}>
              Campus Resources
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="404" prefetch={false}>
              Blog
            </Link>
            <Link href="404" prefetch={false}>
              Community
            </Link>
            <Link href="404" prefetch={false}>
              Support
            </Link>
            <Link href="404" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="404" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="404" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="404" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="404" prefetch={false}>
              Support
            </Link>
            <Link href="404" prefetch={false}>
              Sales
            </Link>
            <Link href="404" prefetch={false}>
              Press
            </Link>
            <Link href="404" prefetch={false}>
              Partnerships
            </Link>
          </div>

          <Footer />
          
        </div>
      </footer>
    </div>
  )
}



function BookOpenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MessageCircleQuestionIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}