"use client"

import { ExternalLink, BookOpen } from "lucide-react"
import { useEffect } from "react"

export default function ResourcesPage() {
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

  const references = [
    {
      title: "Global Citizenship Education GCED Clearinghouse | UNESCO & APCEIU",
      url: "https://www.gcedclearinghouse.org/resources/artificial-intelligence-media-and-information-literacy-human-rights-and-freedom-expression",
      description:
        "Resources on artificial intelligence, media and information literacy, human rights and freedom of expression",
    },
    {
      title: "How Deepfakes Are Impacting Public Trust in Media | Pindrop",
      url: "https://www.pindrop.com/article/deepfakes-impacting-trust-media/",
      description: "Analysis of how deepfake technology affects public trust in media sources",
    },
    {
      title: "Digital Media Literacy: How Filter Bubbles Isolate You",
      url: "https://edu.gcfglobal.org/en/digital-media-literacy/how-filter-bubbles-isolate-you/1/",
      description: "Educational resource explaining filter bubbles and their impact on information consumption",
    },
    {
      title: "ChatGPT's Hidden Bias and the Danger of Filter Bubbles in LLMs | Institute for Experiential AI",
      url: "https://ai.northeastern.edu/news/chatgpts-hidden-bias-and-the-danger-of-filter-bubbles-in-llms",
      description: "Research on bias and filter bubbles in large language models",
    },
    {
      title: "The Intersection of Artificial Intelligence and Journalism: A New Era of Reporting",
      url: "https://thesciencesurvey.com/editorial/2025/03/18/the-intersection-of-artificial-intelligence-and-journalism-a-new-era-of-reporting/",
      description: "Analysis of how AI is transforming journalism and news reporting",
    },
    {
      title: "Helping Students Spot Misinformation Online | NEA",
      url: "https://www.nea.org/nea-today/all-news-articles/helping-students-spot-misinformation-online",
      description: "Educational strategies for teaching students to identify misinformation",
    },
    {
      title: "AI Literacy for Students | Edutopia",
      url: "https://www.edutopia.org/article/ai-literacy-students/",
      description: "Guide for developing AI literacy skills in educational settings",
    },
    {
      title: "Strategies to Promote AI Literacy in K-12 | Digital Promise",
      url: "https://digitalpromise.org/initiative/artificial-intelligence-in-education/ai-literacy/strategies-to-promote-ai-literacy-in-k-12/",
      description: "Comprehensive strategies for promoting AI literacy in K-12 education",
    },
    {
      title: "Detecting AI fingerprints: A guide to watermarking and beyond",
      url: "https://www.brookings.edu/articles/detecting-ai-fingerprints-a-guide-to-watermarking-and-beyond/",
      description: "Technical guide to detecting AI-generated content through watermarking",
    },
  ]

  const additionalResources = [
    {
      title: "FactCheck.org",
      url: "https://www.factcheck.org/",
      description: "Nonpartisan fact-checking website",
    },
    {
      title: "Snopes",
      url: "https://www.snopes.com/",
      description: "Fact-checking website for urban legends, folklore, myths, rumors, and misinformation",
    },
    {
      title: "News Literacy Project",
      url: "https://newslit.org/",
      description: "Educational resources for developing news literacy skills",
    },
  ]

  return (
    <div className="container-custom">
      <h1 className="text-4xl font-bold text-center mb-8 font-heading animate-on-scroll">Resources & References</h1>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8 text-center animate-on-scroll">
          Explore the sources and additional resources used in creating this educational content.
        </p>

        {/* Article References */}
        <div className="card animate-on-scroll">
          <div className="flex items-center mb-6">
            <BookOpen className="text-blue-500 mr-3" size={24} />
            <h2 className="text-2xl font-semibold font-heading">Article References</h2>
          </div>
          <p className="text-gray-600 mb-6">
            The following sources were cited in the original OER article "AI and the Digital Landscape":
          </p>
          <div className="space-y-4">
            {references.map((ref, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                <h3 className="font-semibold text-blue-700 mb-1">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center"
                  >
                    {ref.title}
                    <ExternalLink className="ml-1" size={16} />
                  </a>
                </h3>
                <p className="text-gray-600 text-sm">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="card animate-on-scroll">
          <h2 className="text-2xl font-semibold mb-6 font-heading">Additional Fact-Checking Resources</h2>
          <p className="text-gray-600 mb-6">These tools can help you verify information and check facts:</p>
          <div className="space-y-4">
            {additionalResources.map((resource, index) => (
              <div key={index} className="border-l-4 border-green-200 pl-4 py-2">
                <h3 className="font-semibold text-green-700 mb-1">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center"
                  >
                    {resource.title}
                    <ExternalLink className="ml-1" size={16} />
                  </a>
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Citation Format */}
        <div className="bg-gray-50 p-6 rounded-lg animate-on-scroll">
          <h3 className="text-lg font-semibold mb-3 font-heading">How to Cite This Resource</h3>
          <div className="bg-white p-4 rounded border">
            <p className="font-mono text-sm">
              Fellahi, A., & Bensaada, M. O. (2024). <em>AI and the Digital Landscape</em>. Open Educational Resource.
              Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
