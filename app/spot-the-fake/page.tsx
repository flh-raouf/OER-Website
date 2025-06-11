"use client"

import { useState, useEffect } from "react"
import { CheckCircle, XCircle, RotateCcw, AlertTriangle, Eye } from "lucide-react"

interface Question {
  id: number
  prompt: string
  type: "text" | "headline"
  realOption: {
    content: string
    source: string
    date: string
  }
  fakeOption: {
    content: string
    reason: string
  }
  correctAnswer: "real" | "fake"
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    prompt: "Which headline represents verified reporting about media coverage challenges?",
    type: "headline",
    realOption: {
      content: "Social Media Algorithms Amplify Misinformation During Crisis Events, Study Finds",
      source: "Reuters Institute Digital News Report",
      date: "2023",
    },
    fakeOption: {
      content: "AI Bots Completely Control 95% of All Social Media Posts About Current Events",
      reason: "Exaggerated statistics not supported by research",
    },
    correctAnswer: "real",
    explanation:
      "The real headline reflects documented research about algorithmic amplification, while the fake uses unsupported extreme statistics.",
  },
  {
    id: 2,
    prompt: "Which statement about deepfake technology is factually accurate?",
    type: "text",
    realOption: {
      content:
        "Deepfake detection tools exist but are not 100% reliable, and the technology continues to evolve rapidly.",
      source: "MIT Technology Review",
      date: "2023",
    },
    fakeOption: {
      content:
        "New AI can detect any deepfake with 99.9% accuracy and has completely solved the misinformation problem.",
      reason: "Overstates current technological capabilities",
    },
    correctAnswer: "real",
    explanation:
      "Current deepfake detection is an ongoing challenge with no perfect solution, unlike the fake claim of near-perfect detection.",
  },
  {
    id: 3,
    prompt: "Which statistic about media trust is supported by polling data?",
    type: "text",
    realOption: {
      content: "Trust in mass media has declined significantly, with polls showing historically low confidence levels.",
      source: "Gallup polling data",
      date: "2023",
    },
    fakeOption: {
      content: "Exactly 73.2% of people now get their news exclusively from AI-generated sources.",
      reason: "Fabricated precise statistic with no research basis",
    },
    correctAnswer: "real",
    explanation:
      "Media trust decline is well-documented in polling, while the fake statistic about AI news sources is fabricated.",
  },
  {
    id: 4,
    prompt: "Which description of filter bubbles is accurate according to research?",
    type: "text",
    realOption: {
      content:
        "Algorithmic personalization can create echo chambers where users see content that reinforces existing beliefs.",
      source: "Digital media literacy research",
      date: "2023",
    },
    fakeOption: {
      content:
        "Filter bubbles are completely controlled by government agencies to manipulate public opinion in real-time.",
      reason: "Conspiracy theory not supported by evidence",
    },
    correctAnswer: "real",
    explanation:
      "Filter bubbles are created by algorithmic personalization, not government control as the fake option suggests.",
  },
  {
    id: 5,
    prompt: "Which statement about AI in journalism is factually supported?",
    type: "text",
    realOption: {
      content:
        "News organizations use AI for routine tasks like data analysis while human journalists handle complex reporting.",
      source: "Journalism industry reports",
      date: "2023",
    },
    fakeOption: {
      content:
        "All major newspapers have replaced their entire reporting staff with AI systems that write 100% of articles.",
      reason: "False claim about complete AI replacement",
    },
    correctAnswer: "real",
    explanation:
      "AI assists with routine tasks in journalism but hasn't replaced human journalists entirely as the fake option claims.",
  },
]

export default function SpotTheFakePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAnswerSelect = (answer: "real" | "fake") => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answer
    setSelectedAnswers(newAnswers)

    const correct = answer === questions[currentQuestion].correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setShowFeedback(false)
    } else {
      calculateScore()
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++
      }
    })
    setScore(correct)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setShowFeedback(false)
    setScore(0)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "Excellent! You have strong skills in identifying misinformation."
    if (percentage >= 60) return "Good work! You can spot most fake content but keep practicing."
    if (percentage >= 40) return "Fair. Review the feedback to improve your detection skills."
    return "Consider reviewing media literacy strategies before trying again."
  }

  if (!mounted) {
    return <div className="container-custom py-20 text-center">Loading quiz...</div>
  }

  if (showResults) {
    return (
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="card text-center">
            <h1 className="text-4xl font-bold mb-6 font-heading">Quiz Results</h1>
            <div className="text-6xl font-bold text-blue-600 mb-4 font-heading">
              {score}/{questions.length}
            </div>
            <p className="text-xl mb-8">{getScoreMessage()}</p>

            <div className="space-y-6 text-left">
              {questions.map((question, index) => (
                <div key={question.id} className="border-l-4 border-gray-200 pl-6 py-4">
                  <h3 className="font-semibold mb-3 font-heading">{question.prompt}</h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        <span className="font-medium text-green-700">Real (Correct)</span>
                      </div>
                      <p className="text-sm mb-2">{question.realOption.content}</p>
                      <p className="text-xs text-green-600">
                        Source: {question.realOption.source}, {question.realOption.date}
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center mb-2">
                        <XCircle className="text-red-500 mr-2" size={16} />
                        <span className="font-medium text-red-700">Fake</span>
                      </div>
                      <p className="text-sm mb-2">{question.fakeOption.content}</p>
                      <p className="text-xs text-red-600">Why it's fake: {question.fakeOption.reason}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-2">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span
                      className={selectedAnswers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}
                    >
                      Your answer: {selectedAnswers[index] || "Not answered"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{question.explanation}</p>
                </div>
              ))}
            </div>

            <button onClick={resetQuiz} className="btn-primary mt-8 inline-flex items-center bounce-hover">
              <RotateCcw className="mr-2" size={20} />
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="container-custom">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Eye className="text-red-500 mr-3" size={32} />
            <h1 className="text-4xl font-bold font-heading">Spot the Fake</h1>
          </div>
          <p className="text-lg text-gray-600">
            Practice identifying AI-generated misinformation vs. verified information
          </p>
        </div>

        {/* Instructions Section */}
        <div className="card mb-8">
          <div className="flex items-start mb-4">
            <AlertTriangle className="text-blue-500 mr-3 mt-1" size={24} />
            <h2 className="text-2xl font-semibold font-heading">How to Spot Fake Information</h2>
          </div>

          <p className="text-gray-700 mb-4">
            Before you start the quiz, remember these key strategies from our Media Literacy section:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-2 font-heading">Ask Critical Questions:</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Who published this information?</li>
                <li>• Is it from a reliable, verified source?</li>
                <li>• Are there specific dates and attributions?</li>
                <li>• Does it use extreme or emotional language?</li>
                <li>• Are the statistics too precise or round?</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2 font-heading">Red Flags to Watch For:</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Unsupported extreme claims (99.9% accuracy, etc.)</li>
                <li>• Conspiracy theories without evidence</li>
                <li>• Fabricated precise statistics</li>
                <li>• Claims that overstate current technology</li>
                <li>• Information without credible sources</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Remember:</strong> Real information typically includes specific sources, dates, and measured
              language. Fake information often uses extreme claims, lacks proper attribution, or makes unsupported
              generalizations.
              <br />
              <span className="text-blue-600">
                💡 Review our{" "}
                <a href="/media-strategies" className="underline hover:text-blue-800">
                  Media Literacy Strategies
                </a>{" "}
                for more detailed guidance.
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 font-heading">{question.prompt}</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Real Option */}
              <button
                onClick={() => handleAnswerSelect("real")}
                disabled={showFeedback}
                className={`text-left p-6 rounded-lg border-2 transition-all duration-300 ${
                  selectedAnswers[currentQuestion] === "real"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                } ${showFeedback ? "cursor-not-allowed" : "hover:shadow-md"}`}
              >
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center">
                    <span className="text-sm font-bold">A</span>
                  </div>
                  <span className="font-medium">Option A</span>
                </div>
                <p className="text-gray-700 mb-3">{question.realOption.content}</p>
                {showFeedback && question.correctAnswer === "real" && (
                  <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                    ✓ Verified source: {question.realOption.source}
                  </div>
                )}
              </button>

              {/* Fake Option */}
              <button
                onClick={() => handleAnswerSelect("fake")}
                disabled={showFeedback}
                className={`text-left p-6 rounded-lg border-2 transition-all duration-300 ${
                  selectedAnswers[currentQuestion] === "fake"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                } ${showFeedback ? "cursor-not-allowed" : "hover:shadow-md"}`}
              >
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center">
                    <span className="text-sm font-bold">B</span>
                  </div>
                  <span className="font-medium">Option B</span>
                </div>
                <p className="text-gray-700 mb-3">{question.fakeOption.content}</p>
                {showFeedback && question.correctAnswer === "fake" && (
                  <div className="text-sm text-red-600 bg-red-50 p-2 rounded">✗ Fake: {question.fakeOption.reason}</div>
                )}
              </button>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div
                className={`mt-6 p-4 rounded-lg ${isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
              >
                <div className="flex items-center mb-2">
                  {isCorrect ? (
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                  ) : (
                    <XCircle className="text-red-500 mr-2" size={20} />
                  )}
                  <span className={`font-medium ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{question.explanation}</p>

                {question.correctAnswer === "real" ? (
                  <p className="text-sm text-green-600">
                    The real option was verified by {question.realOption.source} in {question.realOption.date}.
                  </p>
                ) : (
                  <p className="text-sm text-red-600">
                    The fake option was identified because: {question.fakeOption.reason}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1)
                  setShowFeedback(false)
                }
              }}
              disabled={currentQuestion === 0}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!showFeedback}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? "View Results" : "Next Question"}
            </button>
          </div>
        </div>

        {/* Warning Notice */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start">
            <AlertTriangle className="text-yellow-600 mr-3 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-1">Educational Purpose</h3>
              <p className="text-sm text-yellow-700">
                This quiz uses examples to demonstrate media literacy concepts. All "fake" options are clearly labeled
                and created for educational purposes to help you practice identifying misinformation patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
