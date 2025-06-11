"use client"

import { Users, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container-custom">
      <h1 className="text-4xl font-bold text-center mb-8 font-heading animate-on-scroll">About This Project</h1>

      <div className="prose max-w-none">
        {/* Project Overview */}
        <div className="card animate-on-scroll">
          <h2 className="text-2xl font-semibold mb-4 font-heading">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            This educational website was created as part of a project for the course "Communication Skills and Media and
            Information Literacy." The site presents a shortened, accessible version of the Open Educational Resource
            (OER) article "AI and the Digital Landscape."
          </p>
          <p className="text-gray-700">
            The goal is to make important information about AI's impact on media and information literacy accessible to
            students and the general public through an interactive, user-friendly web interface.
          </p>
        </div>

        {/* Original Authors */}
        <div className="card animate-on-scroll">
          <div className="flex items-center mb-6">
            <Users className="text-blue-500 mr-3" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Original Article Authors</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold font-heading">FELLAHI Abderraouf</h3>
              <p className="text-gray-600">Co-Author</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold font-heading">BENSAADA Mohand Oubelaid</h3>
              <p className="text-gray-600">Co-Author</p>
            </div>
          </div>
        </div>

        {/* Website Development */}
        <div className="card animate-on-scroll">
          <h2 className="text-2xl font-semibold mb-4 font-heading">Website Development</h2>
          <p className="text-gray-700 mb-4">
            This website was developed using modern web technologies to create an accessible and responsive educational
            platform:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Built with Next.js and React for optimal performance</li>
            <li>Styled with Tailwind CSS for responsive design</li>
            <li>Designed with accessibility and mobile-friendliness in mind</li>
            <li>Interactive quiz functionality for knowledge assessment</li>
            <li>Clean, modern interface optimized for learning</li>
          </ul>
        </div>

        {/* License Information */}
        <div className="card animate-on-scroll">
          <div className="flex items-center mb-6">
            <Award className="text-green-500 mr-3" size={24} />
            <h2 className="text-2xl font-semibold font-heading">License & Usage</h2>
          </div>

          <div className="flex items-center mb-4">
            <Image
              src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png"
              alt="Creative Commons Attribution 4.0 International License"
              width={88}
              height={31}
              className="mr-4"
            />
            <div>
              <p className="font-semibold">Creative Commons Attribution 4.0 International</p>
              <p className="text-sm text-gray-600">CC BY 4.0</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            This work is licensed under the{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              Creative Commons Attribution 4.0 International License
              <ExternalLink className="ml-1" size={14} />
            </a>
            . This means you are free to:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">You are free to:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>
                  • <strong>Share</strong> — copy and redistribute the material
                </li>
                <li>
                  • <strong>Adapt</strong> — remix, transform, and build upon the material
                </li>
                <li>• For any purpose, even commercially</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">Under these terms:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>
                  • <strong>Attribution</strong> — You must give appropriate credit
                </li>
                <li>• Provide a link to the license</li>
                <li>• Indicate if changes were made</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Information */}
        <div className="card animate-on-scroll">
          <h2 className="text-2xl font-semibold mb-4 font-heading">Course Context</h2>
          <p className="text-gray-700 mb-4">This project was developed as part of the academic course:</p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 font-heading">
              Communication Skills and Media and Information Literacy
            </h3>
            <p className="text-blue-700 text-sm mt-1">
              A course focused on developing critical thinking skills for navigating the modern digital information
              landscape.
            </p>
          </div>
        </div>

        {/* Contact & Feedback */}
        <div className="bg-gray-50 p-6 rounded-lg text-center animate-on-scroll">
          <h3 className="text-lg font-semibold mb-3 font-heading">Questions or Feedback?</h3>
          <p className="text-gray-700">
            This educational resource is designed to promote media literacy and critical thinking. If you have
            suggestions for improvement or questions about the content, we encourage you to engage with your educational
            institution or explore the additional resources provided.
          </p>
        </div>
      </div>
    </div>
  )
}
