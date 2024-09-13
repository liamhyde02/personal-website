import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/images/headshot.jpeg"
              alt="Liam Hyde"
              width={150}
              height={150}
              className="rounded-full border-4 border-gray-200"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">Liam Hyde</h1>
              <p className="text-xl text-gray-600 mb-4">Computer Science Graduate</p>
              <p className="text-gray-600 mb-4">
                Recent graduate from Cal Poly with a Bachelor's degree in Computer Science. 
                Passionate about software development and eager to apply my skills in a professional setting.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="https://github.com/liamhyde02" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub Profile</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/liam-hyde" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </Button>
                </Link>
                <Link href="lihyde@calpoly.edu">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email Address</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript/TypeScript</li>
              <li>Next.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Tailwind CSS</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal Portfolio Website</li>
              <li>UML Generator</li>
              <li>LivePM API/Database</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}