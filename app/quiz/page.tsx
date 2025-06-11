"use client"

import { useState, useEffect } from "react"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What percentage of people are worried about deepfake and voice-cloning tools according to the article?",
    options: ["70%", "80%", "90%", "95%"],
    correct: 2,
    explanation:
      "According to the study mentioned in the article, 90% of people are worried about deepfake and voice-cloning tools.",
  },
  {
    id: 2,
    question: "What is a 'filter bubble' in the context of AI and media?",
    options: [
      "A technical error in AI systems",
      "A situation where users only see content matching their existing beliefs",
      "A type of deepfake technology",
      "A method for fact-checking information",
    ],
    correct: 1,
    explanation:
      "A filter bubble occurs when AI algorithms show users only content that matches their existing interests and opinions, isolating them from diverse viewpoints.",
  },
  {
    id: 3,
    question: "What percentage of U.S. adults 'greatly trust' news media according to the article?",
    options: ["7%", "15%", "25%", "39%"],
    correct: 0,
    explanation:
      "Only about 7% of U.S. adults said they 'greatly trust' news media, while 39% said they do not trust media at all.",
  },
  {
    id: 4,
    question: "Which of the following is NOT mentioned as a strategy for navigating AI-driven media?",
    options: [
      "Using multiple sources and diverse viewpoints",
      "Learning to use reverse image search",
      "Avoiding all social media platforms",
      "Supporting media ethics and transparency",
    ],
    correct: 2,
    explanation:
      "The article doesn't suggest avoiding all social media platforms. Instead, it recommends being aware of how algorithms work and actively seeking diverse viewpoints.",
  },
  {
    id: 5,
    question: "According to the article, what is one way AI is helping journalism?",
    options: [
      "Replacing all human journalists",
      "Automating routine tasks like sports scores and weather reports",
      "Eliminating the need for fact-checking",
      "Creating more sensational headlines",
    ],
    correct: 1,
    explanation:
      "AI helps journalism by automating routine tasks like generating simple news items (sports scores, weather reports), allowing journalists to focus on more detailed reporting.",
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++
      }
    })
    setScore(correct)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setScore(0)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "Excellent! You have a strong understanding of AI and media literacy."
    if (percentage >= 60) return "Good job! You understand most concepts but could benefit from reviewing some areas."
    if (percentage >= 40) return "Fair. Consider reviewing the material to strengthen your understanding."
    return "You might want to review the content more thoroughly before retaking the quiz."
  }

  if (!mounted) {
    return <div className="container-custom py-20 text-center">Loading quiz...</div>
  }

  if (showResults) {
    return (
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="card text-center">
            <h1 className="text-3xl font-bold mb-6 font-heading">Quiz Results</h1>
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {score}/{questions.length}
            </div>
            <p className="text-xl mb-6">{getScoreMessage()}</p>

            <div className="space-y-6 text-left">
              {questions.map((question, index) => (
                <div key={question.id} className="border-l-4 border-gray-200 pl-4">
                  <h3 className="font-semibold mb-2 font-heading">{question.question}</h3>
                  <div className="flex items-center mb-2">
                    {selectedAnswers[index] === question.correct ? (
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                    ) : (
                      <XCircle className="text-red-500 mr-2" size={20} />
                    )}
                    <span className={selectedAnswers[index] === question.correct ? "text-green-600" : "text-red-600"}>
                      Your answer: {question.options[selectedAnswers[index]] || "Not answered"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Correct answer: {question.options[question.correct]}</p>
                  <p className="text-sm text-gray-700">{question.explanation}</p>
                </div>
              ))}
            </div>

            <button onClick={resetQuiz} className="btn-primary mt-8 inline-flex items-center">
              <RotateCcw className="mr-2" size={20} />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="container-custom">
      <div className="max-w-2xl mx-auto">
        <div className="card">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-2 ml-4">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold font-heading">AI & Media Literacy Quiz</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6 font-heading">{question.question}</h2>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
