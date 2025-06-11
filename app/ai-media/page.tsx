"use client"

import { AlertTriangle, Eye, Zap, TrendingDown } from "lucide-react"
import { useEffect, useRef } from "react"

export default function AIMediaPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
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
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="container-custom">
      <h1 className="text-4xl font-bold text-center mb-8 font-heading animate-on-scroll">
        AI's Impact on Media and Information
      </h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8 text-center animate-on-scroll">
          Artificial intelligence is fundamentally changing how we create, share, and consume information. Here are the
          key ways AI affects our media landscape.
        </p>

        {/* AI-Generated Misinformation */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <AlertTriangle className="text-red-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">AI-Generated Misinformation & Deepfakes</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• AI tools can create fake but realistic content including pictures, voices, and videos</li>
            <li>• Deepfakes can show fake videos of famous people and spread false information quickly</li>
            <li>
              • Security experts note that deepfakes can "copy voices, faces, and even whole conversations"
              realistically
            </li>
            <li>• 90% of people are worried about deepfake and voice-cloning tools</li>
            <li>• This fake content damages trust and makes it harder to distinguish truth from falsehood</li>
          </ul>
        </div>

        {/* Filter Bubbles */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <Eye className="text-orange-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Algorithmic Personalization & Filter Bubbles</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• AI recommendation algorithms learn from clicks and likes to show personalized content</li>
            <li>• Creates "filter bubbles" where users only see content matching their existing beliefs</li>
            <li>• Social media may hide posts that don't match user profiles</li>
            <li>• This personalization is largely hidden from users</li>
            <li>• Results in people hearing only one side of topics, increasing divisions</li>
          </ul>
        </div>

        {/* Journalism Changes */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <Zap className="text-blue-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Changes in News Production & Journalism</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-2 font-heading">Benefits:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Automates routine tasks like sports scores and weather reports</li>
                <li>• Helps search data for big stories</li>
                <li>• Suggests headlines and summaries</li>
                <li>• Allows journalists to focus on detailed reporting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-2 font-heading">Concerns:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Loss of authenticity and personal voice</li>
                <li>• AI writing can sound generic</li>
                <li>• May introduce unchecked errors or biases</li>
                <li>• Questions about accountability and responsibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Challenges */}
        <div className="card bounce-hover animate-on-scroll">
          <div className="flex items-start mb-4">
            <TrendingDown className="text-red-600 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Trust & Authenticity Challenges</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li>• Public trust in media is at historic lows</li>
            <li>• Only 7% of U.S. adults "greatly trust" news media</li>
            <li>• 39% do not trust media at all</li>
            <li>• When deepfakes can copy real officials, viewers doubt even true videos</li>
            <li>• This distrust can lead people to stop participating in civic life</li>
            <li>• Makes informed citizenship and democratic participation more difficult</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8 animate-on-scroll">
          <p className="text-lg">
            <strong>Key Takeaway:</strong> UNESCO and media experts emphasize that these challenges make media and
            information literacy more important than ever. Understanding these effects is the first step toward
            navigating our AI-driven media landscape safely.
          </p>
        </div>
      </div>
    </div>
  )
}
