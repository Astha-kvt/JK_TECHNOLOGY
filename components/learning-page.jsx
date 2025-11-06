"use client"
import { useState } from "react"

export default function LearningPage({ course, onBack }) {
  const [expandedSections, setExpandedSections] = useState({
    0: true,
    1: false,
    2: false,
  })

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const curriculum = [
    {
      title: "Python Fundamentals",
      topics: ["Variables and Data Types", "Control Statements", "Functions and Modules"],
    },
    {
      title: "Python for Automotive Testing",
      topics: ["CAN protocol", "Using CANoe / Vector", "Real-time testing examples"],
    },
    {
      title: "Data Analysis for Automotive",
      topics: ["Data Collection Techniques", "Analytics & Visualization", "Real-world Case Studies"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">J</span>
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base">Jacks</div>
                <div className="text-xs sm:text-sm">Technologies</div>
              </div>
            </div>
            <button
              onClick={onBack}
              className="bg-white text-red-600 px-4 py-2 rounded font-bold text-sm hover:bg-gray-100 transition"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left - Curriculum */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Python for Automotive</h1>

            <div className="space-y-4">
              {curriculum.map((section, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between gap-4 p-4 bg-gray-50 hover:bg-gray-100 transition font-bold text-gray-900"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-red-600 text-white w-6 h-6 rounded flex items-center justify-center text-sm">
                        +
                      </div>
                      <span className="text-sm sm:text-base">{section.title}</span>
                    </div>
                    <span className="text-gray-600">{expandedSections[index] ? "−" : "+"}</span>
                  </button>

                  {expandedSections[index] && (
                    <div className="p-4 space-y-2 border-t border-gray-200">
                      {section.topics.map((topic, i) => (
                        <div key={i} className="text-gray-700 text-sm sm:text-base py-1">
                          {topic}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Course Card */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
              {/* Course Image */}
              <div className="bg-gradient-to-br from-green-300 via-yellow-300 to-blue-300 rounded-lg h-48 sm:h-64 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl mb-2">🐍</div>
                  <div className="text-white font-bold text-lg sm:text-2xl">Python</div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="bg-white border-4 border-red-600 rounded-full w-32 h-32 sm:w-40 sm:h-40 flex flex-col items-center justify-center -mt-20 relative z-10">
                  <div className="text-2xl sm:text-4xl font-bold text-red-600 mb-2">🚗</div>
                  <div className="text-xs sm:text-sm font-bold text-red-600 text-center">
                    PYTHON FOR
                    <br />
                    AUTOMOTIVE
                  </div>
                </div>
              </div>

              {/* Price and Details */}
              <div className="text-center mt-12">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">₹14,999</div>

                <button className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded mb-6 hover:bg-red-700 transition text-sm sm:text-base">
                  Enroll Now
                </button>

                <div className="space-y-3 text-gray-700 mb-6">
                  <div className="flex justify-center gap-2">
                    <span className="font-semibold">Duration:</span>
                    <span>2 Months</span>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="font-semibold">Mode:</span>
                    <span>Online / Hybrid</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl sm:text-3xl">👨</span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-600 text-sm">Mentored By:</div>
                      <div className="bg-red-600 text-white font-bold px-3 py-1 rounded text-xs sm:text-sm">
                        BASITH AHAMED
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
