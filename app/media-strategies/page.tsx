"use client"

import { GraduationCap, Search, Users, Shield, CheckCircle, Globe } from "lucide-react"
import { useEffect } from "react"

export default function MediaStrategiesPage() {
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
      <h1 className="text-4xl font-bold text-center mb-8 font-heading animate-on-scroll">Media Literacy Strategies</h1>

      <p className="text-lg text-gray-600 mb-8 text-center animate-on-scroll">
        Practical strategies for navigating an AI-driven media landscape safely and critically.
      </p>

      <div className="space-y-8">
        {/* Education */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <GraduationCap className="text-blue-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Media Literacy Education</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Schools should introduce AI concepts and encourage questioning information sources</li>
            <li>• Learn to identify sponsored content and recognize altered images</li>
            <li>• Understand how AI tools work and their limitations</li>
            <li>• Parents and communities should raise awareness about AI and biases</li>
            <li>• Practice evaluating news sources for credibility and reliability</li>
          </ul>
        </div>

        {/* Critical Thinking */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <Search className="text-green-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Critical Thinking & Fact-Checking</h2>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2 font-heading">When encountering news, ask yourself:</h3>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• Who published this content?</li>
              <li>• Is it from a reliable site or author?</li>
              <li>• Is the information supported by evidence?</li>
              <li>• Are there other sources reporting the same thing?</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 font-heading">Useful fact-checking resources:</h3>
            <ul className="space-y-2 text-gray-700 ml-4">
              <li>• FactCheck.org</li>
              <li>• Snopes</li>
              <li>• News Literacy Project</li>
              <li>• Official publications and primary sources</li>
            </ul>
          </div>
        </div>

        {/* Algorithm Awareness */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <Users className="text-purple-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Awareness of Algorithms & Personal Bias</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Understand that algorithms feed you content based on past behavior</li>
            <li>• Actively seek different viewpoints by visiting news sites directly</li>
            <li>• Subscribe to multiple publications with varying perspectives</li>
            <li>• Follow social media accounts that hold different opinions</li>
            <li>• Be aware of your own biases and question your assumptions</li>
            <li>• Consciously diversify your information sources</li>
          </ul>
        </div>

        {/* Multiple Sources */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <Globe className="text-orange-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Use Multiple Sources & Diverse Viewpoints</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Always check important news with several trusted sources</li>
            <li>• Look for the same story on well-known sites and major newspapers</li>
            <li>• Confirm key facts like names, dates, and quotes across sources</li>
            <li>• Only share content when you're confident it's accurate</li>
            <li>• Follow international and independent news, not just social media</li>
            <li>• Read beyond headlines and look for detailed reporting</li>
          </ul>
        </div>

        {/* Digital Tools */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <Shield className="text-red-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Digital Tools & Verification Techniques</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Use reverse image search (Google Images) to check if photos have been altered</li>
            <li>• Look for browser extensions designed to detect AI writing or deepfakes</li>
            <li>• Learn about digital "watermarking" systems that tag AI-created content</li>
            <li>• Spot fake media by looking for strange details in photos or videos</li>
            <li>• Watch for robotic or unnatural language patterns in text</li>
            <li>• Stay updated on new verification tools as they develop</li>
          </ul>
        </div>

        {/* Community Support */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <CheckCircle className="text-teal-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Support Media Ethics & Transparency</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Support initiatives requiring platforms to label AI-generated content</li>
            <li>• Understand how information is produced and who creates it</li>
            <li>• Support public journalism like local newspapers and public radio</li>
            <li>• Advocate for policies that promote media transparency</li>
            <li>• Ask for better rules to make algorithms more fair and ethical</li>
            <li>• Help create a safer media environment for everyone</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8 animate-on-scroll">
        <p className="text-lg">
          <strong>Remember:</strong> By combining education, critical questioning, technical checks, and civic
          awareness, we can protect ourselves from AI-driven misinformation and stay informed and engaged citizens.
        </p>
      </div>
    </div>
  )
}
