//To do: Create a page for the services section of the website and add the following sections: About, History, Goals, Services, Testimonials, and Contact

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import  Header  from "@/app/Header"
import  Footer  from  "@/app/Footer"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    
      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Stulligent</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Stulligent is your AI chatbot designed to assist first-year students in their transition to college. Stulligent provides quick answers and guidance on academics, campus resources, and personal advice to help you succeed and enjoy your college journey.

                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  At the core of our values are integrity, innovation, and a commitment to excellence. We believe in
                  fostering a collaborative environment where our team can thrive and our clients can succeed.
                </p>
              </div>
              <div>
                <img
                  src="/photo1.jpg"
                  width="550"
                  height="310"
                  alt="About Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our History</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                Stulligent was founded in 2024 by an incoming first-year student who saw the need for a dedicated resource to help new students adjust to college life. Combining personal experience with a passion for technology, our founder developed Stulligent to provide 24/7 support and guidance. Our mission is to offer fellow students reliable help and make their transition to college as smooth as possible.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Since our inception, we have helped thousands of students navigate the challenges of college life and achieve their academic goals. We continue to innovate and expand our services to meet the evolving needs of our clients.
                </p>
              </div>
              <div>
                <img
                  src="/Service1.jpg"
                  width="550"
                  height="310"
                  alt="History"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Goals</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                Stulligent aims to deliver round-the-clock support, offer clear guidance on academic and campus-related matters, and ease the transition into college life for first-year students.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our team is dedicated to providing personalized assistance, innovative solutions, and a wide range of resources to help students succeed in their academic and personal lives.
                </p>
              </div>
              <div>
                <img
                  src="/Service3.jpg"
                  width="550"
                  height="310"
                  alt="Goals"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                Stulligent provides instant support with academic questions, campus information, and personal advice to help first-year students throughout their college journey.
                </p>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our services include chat support, personalized guidance, and access to a wide range of resources
                  to help students succeed in their academic and personal lives.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div>
                <img
                  src="/Service4.jpg"
                  width="550"
                  height="310"
                  alt="Services"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Stulligent, we are proud to have built strong relationships with our clients, who have consistently
                  praised our work and the value we bring to their academic preparation.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="grid gap-4 rounded-lg bg-muted p-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Jane Poltro</p>
                        <p className="text-sm text-muted-foreground">Incoming Carleton Student, Computer Science</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Stulligent has been an invaluable resource for me as I prepare to start college. The team has
                      provided me with the guidance and support I need to succeed in my academic journey."
                    </p>
                  </div>
                  <div className="grid gap-4 rounded-lg bg-muted p-6">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Kayn Sandro</p>
                        <p className="text-sm text-muted-foreground">Incoming UOttawa Student, Biomedical Engineering</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Stulligent is simply amazing! I mean don't get me started on how i don't need a monthly subscription in order to use their services. The chatbot is so helpful and responsive, and the team is always there when you need them. I highly recommend their services to any student looking for support."
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/photo6.jpg"
                  width="550"
                  height="310"
                  alt="Testimonials"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Whether you have a specific project in mind or just want to learn more about our services, we'd love
                  to hear from you. Our team is always ready to provide personalized guidance and support.
                </p>
                <form className="mt-8 grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="Name" className="col-span-1" />
                    <Input type="email" placeholder="Email" className="col-span-1" />
                  </div>
                  <Input type="text" placeholder="Subject" className="w-full" />
                  <Textarea placeholder="Message" className="w-full" rows={5} />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </div>
              <div>
                <img
                  src="/Service2.jpg"
                  width="550"
                  height="310"
                  alt="Contact"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}