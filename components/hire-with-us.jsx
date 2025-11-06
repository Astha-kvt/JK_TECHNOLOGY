"use client"
import { useState } from "react"
import Header from "./header"

export default function HireWithUs({ onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirements: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", company: "", email: "", phone: "", requirements: "" })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header onNavigate={(page) => page === "home" && onBack()} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              Fastest Way to Hire
              <br />
              Job-Ready Developers
              <br />
              at Zero Cost
            </h1>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-400 mb-2">Z</div>
                <h3 className="font-bold text-lg mb-1">ZERO</h3>
                <p className="text-gray-600">Hiring fee for recruiters</p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">👤</div>
                <h3 className="font-bold text-lg mb-1">3 - 5 Days</h3>
                <p className="text-gray-600">Time to Hire</p>
              </div>

              <div className="border-2 border-gray-200 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-500 mb-2">👍</div>
                <h3 className="font-bold text-lg mb-1">80P1%</h3>
                <p className="text-gray-600">Net Promote Score from our 2000+ Hiring Partners</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="border-2 border-gray-300 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="text-4xl">👨‍💼</div>
              <h2 className="text-2xl font-bold">Hire Tech Talent</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-red-600 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Company name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-red-600 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Work Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Company Email"
                  className="w-full border-b-2 border-gray-300 pb-2 focus:border-red-600 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone number<span className="text-red-600">*</span>
                </label>
                <div className="flex gap-2 items-center">
                  <select className="border-2 border-gray-300 px-3 py-2 rounded focus:border-red-600 outline-none transition">
                    <option>India (intra)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="flex-1 border-b-2 border-gray-300 pb-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Share your requirements<span className="text-red-600">*</span>
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-2 border-gray-300 p-3 rounded focus:border-red-600 outline-none transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition"
              >
                Start Hiring
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-sm text-gray-600 border-t pt-8">
          <p>
            By continuing to use this website, you accept our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Cookie Policy
            </a>
            .
          </p>
          <button className="bg-gray-800 text-white px-8 py-2 rounded hover:bg-gray-900 transition">OK</button>
        </div>
      </div>
    </main>
  )
}
