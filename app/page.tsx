"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Users, Brain, Target, CheckCircle } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HomePage() {
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
    <div className="min-h-screen">
      {/* Hero Section - GitHub Style */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 fade-in font-heading">
              Navigate the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Driven
              </span>{" "}
              Media Landscape
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 fade-in font-light leading-relaxed">
              Master the skills to identify misinformation, understand algorithmic bias, and think critically in our
              rapidly evolving digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
              <Link href="/ai-media" className="btn-primary bounce-hover">
                Start Learning <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/spot-the-fake" className="btn-secondary pulse-hover">
                Try "Spot the Fake" Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center animate-on-scroll">
            <div className="card border-l-4 border-red-500">
              <div className="text-4xl font-bold text-red-600 mb-2 font-heading">90%</div>
              <p className="text-gray-700">of people worry about deepfake technology</p>
            </div>
            <div className="card border-l-4 border-orange-500">
              <div className="text-4xl font-bold text-orange-600 mb-2 font-heading">7%</div>
              <p className="text-gray-700">of adults "greatly trust" news media</p>
            </div>
            <div className="card border-l-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600 mb-2 font-heading">100%</div>
              <p className="text-gray-700">need for media literacy education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Everything you need to stay informed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you navigate AI's impact on media and develop critical thinking skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center animate-on-scroll bounce-hover">
              <Shield className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold mb-3 font-heading">AI & Media Impact</h3>
              <p className="text-gray-600 mb-4">
                Understand how AI creates deepfakes, filter bubbles, and affects journalism.
              </p>
              <Link href="/ai-media" className="text-blue-600 hover:underline font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card text-center animate-on-scroll bounce-hover">
              <BookOpen className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold mb-3 font-heading">Media Literacy Strategies</h3>
              <p className="text-gray-600 mb-4">
                Practical tools for fact-checking and critical thinking in the digital age.
              </p>
              <Link href="/media-strategies" className="text-green-600 hover:underline font-medium">
                Explore Strategies →
              </Link>
            </div>

            <div className="card text-center animate-on-scroll bounce-hover">
              <Brain className="mx-auto mb-4 text-purple-600" size={48} />
              <h3 className="text-xl font-semibold mb-3 font-heading">Interactive Quizzes</h3>
              <p className="text-gray-600 mb-4">Test your knowledge and practice identifying misinformation.</p>
              <Link href="/quiz" className="text-purple-600 hover:underline font-medium">
                Take Quiz →
              </Link>
            </div>

            <div className="card text-center animate-on-scroll bounce-hover">
              <Target className="mx-auto mb-4 text-red-600" size={48} />
              <h3 className="text-xl font-semibold mb-3 font-heading">Spot the Fake</h3>
              <p className="text-gray-600 mb-4">Practice identifying AI-generated misinformation with real examples.</p>
              <Link href="/spot-the-fake" className="text-red-600 hover:underline font-medium">
                Try Challenge →
              </Link>
            </div>

            <div className="card text-center animate-on-scroll bounce-hover">
              <Users className="mx-auto mb-4 text-indigo-600" size={48} />
              <h3 className="text-xl font-semibold mb-3 font-heading">Expert Resources</h3>
              <p className="text-gray-600 mb-4">Access curated sources and fact-checking tools from experts.</p>
              <Link href="/resources" className="text-indigo-600 hover:underline font-medium">
                View Resources →
              </Link>
            </div>

            <div className="card text-center animate-on-scroll bounce-hover">
              <CheckCircle className="mx-auto mb-4 text-teal-600" size={48} />
              <h3 className="text-xl font-semibold mb-3 font-heading">Open Education</h3>
              <p className="text-gray-600 mb-4">Free, accessible content licensed under Creative Commons.</p>
              <Link href="/about" className="text-teal-600 hover:underline font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Ready to become media literate?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your journey to understanding AI's impact on media and developing critical thinking skills.
            </p>
            <Link
              href="/ai-media"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center bounce-hover"
            >
              Begin Learning <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
