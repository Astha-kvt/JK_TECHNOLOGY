"use client"
import { useState } from "react"
import Header from "./header"

export default function AdminDashboard({ onBack }) {
  const [activeTab, setActiveTab] = useState("enroll")
  const [enrolledStudents, setEnrolledStudents] = useState([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [enrollForm, setEnrollForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    batch: "",
    age: "",
    gender: "",
    courseId: "",
  })

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    amount: "",
    gst: "",
    mentor: "",
    category: "",
  })

  const [syllabusItems, setSyllabusItems] = useState([{ title: "", duration: "" }])

  const handleEnrollChange = (e) => {
    const { name, value } = e.target
    setEnrollForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCourseChange = (e) => {
    const { name, value } = e.target
    setCourseForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSyllabusChange = (index, field, value) => {
    const newItems = [...syllabusItems]
    newItems[index][field] = value
    setSyllabusItems(newItems)
  }

  const addSyllabusItem = () => {
    setSyllabusItems([...syllabusItems, { title: "", duration: "" }])
  }

  const handleEnrollSubmit = (e) => {
    e.preventDefault()
    console.log("Enroll Student Data:", enrollForm)
    setEnrolledStudents([...enrolledStudents, { ...enrollForm, id: Date.now() }])
    setEnrollForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      batch: "",
      age: "",
      gender: "",
      courseId: "",
    })
  }

  const handleCourseSubmit = (e) => {
    e.preventDefault()
    const totalAmount = (Number.parseFloat(courseForm.amount) + Number.parseFloat(courseForm.gst)).toFixed(2)
    console.log("Course Data:", {
      ...courseForm,
      totalAmount,
      syllabus: syllabusItems,
    })
    setCourseForm({
      title: "",
      description: "",
      amount: "",
      gst: "",
      mentor: "",
      category: "",
    })
    setSyllabusItems([{ title: "", duration: "" }])
  }

  const toggleMobileMenu = () => {
    console.log("[v0] Toggling menu from", mobileMenuOpen, "to", !mobileMenuOpen)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleTabChange = (tab) => {
    console.log("[v0] Changing tab to", tab)
    setActiveTab(tab)
    setMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Header onNavigate={(page) => page === "home" && onBack()} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage students, courses, and curriculum</p>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="md:hidden mb-6">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg flex justify-between items-center hover:bg-red-700 transition active:bg-red-800"
          >
            <span>
              {activeTab === "enroll" && "Enroll Students"}
              {activeTab === "course" && "Add Course"}
              {activeTab === "enrolled" && `Enrolled Students (${enrolledStudents.length})`}
            </span>
            <span className={`text-xl transform transition duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`}>▼</span>
          </button>

          {/* Improved dropdown positioning and visibility */}
          {mobileMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setMobileMenuOpen(false)} />}
          {mobileMenuOpen && (
            <div className="relative mt-2 bg-white border-2 border-red-600 rounded-lg overflow-hidden shadow-2xl z-50">
              <button
                type="button"
                onClick={() => handleTabChange("enroll")}
                className={`w-full text-left px-4 py-3 font-semibold transition ${
                  activeTab === "enroll" ? "bg-red-100 text-red-600" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Enroll Students
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("course")}
                className={`w-full text-left px-4 py-3 font-semibold transition border-t border-gray-200 ${
                  activeTab === "course" ? "bg-red-100 text-red-600" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Add Course
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("enrolled")}
                className={`w-full text-left px-4 py-3 font-semibold transition border-t border-gray-200 ${
                  activeTab === "enrolled" ? "bg-red-100 text-red-600" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Enrolled Students ({enrolledStudents.length})
              </button>
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex gap-4 mb-8 border-b border-gray-300 overflow-x-auto">
          <button
            onClick={() => setActiveTab("enroll")}
            className={`px-6 py-3 font-semibold whitespace-nowrap transition ${
              activeTab === "enroll" ? "border-b-4 border-red-600 text-red-600" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Enroll Students
          </button>
          <button
            onClick={() => setActiveTab("course")}
            className={`px-6 py-3 font-semibold whitespace-nowrap transition ${
              activeTab === "course" ? "border-b-4 border-red-600 text-red-600" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Add Course
          </button>
          <button
            onClick={() => setActiveTab("enrolled")}
            className={`px-6 py-3 font-semibold whitespace-nowrap transition ${
              activeTab === "enrolled" ? "border-b-4 border-red-600 text-red-600" : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Enrolled Students ({enrolledStudents.length})
          </button>
        </div>

        {/* Enroll Students Tab */}
        {activeTab === "enroll" && (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Enroll New Student</h2>
            <form onSubmit={handleEnrollSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={enrollForm.firstName}
                    onChange={handleEnrollChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={enrollForm.lastName}
                    onChange={handleEnrollChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={enrollForm.email}
                    onChange={handleEnrollChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={enrollForm.phone}
                    onChange={handleEnrollChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Batch <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={enrollForm.batch}
                    onChange={handleEnrollChange}
                    placeholder="e.g., Batch 2025-Q1"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Age <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={enrollForm.age}
                    onChange={handleEnrollChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Gender <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="gender"
                    value={enrollForm.gender}
                    onChange={handleEnrollChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Course ID <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="courseId"
                    value={enrollForm.courseId}
                    onChange={handleEnrollChange}
                    placeholder="e.g., COURSE001"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
              >
                Enroll Student
              </button>
            </form>
          </div>
        )}

        {/* Add Course Tab */}
        {activeTab === "course" && (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h2>
            <form onSubmit={handleCourseSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Course Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={courseForm.title}
                    onChange={handleCourseChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={courseForm.description}
                    onChange={handleCourseChange}
                    rows="3"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Amount (₹) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={courseForm.amount}
                    onChange={handleCourseChange}
                    step="0.01"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    GST (₹) <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="gst"
                    value={courseForm.gst}
                    onChange={handleCourseChange}
                    step="0.01"
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Total Amount: ₹
                    {courseForm.amount && courseForm.gst
                      ? (Number.parseFloat(courseForm.amount) + Number.parseFloat(courseForm.gst)).toFixed(2)
                      : "0.00"}
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Mentor <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="mentor"
                    value={courseForm.mentor}
                    onChange={handleCourseChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="category"
                    value={courseForm.category}
                    onChange={handleCourseChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai">Artificial Intelligence</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-science">Data Science</option>
                    <option value="automotive">Automotive</option>
                  </select>
                </div>
              </div>

              {/* Syllabus Section */}
              <div className="border-t-2 pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Syllabus</h3>
                <div className="space-y-4">
                  {syllabusItems.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-2 border-gray-200 rounded-lg"
                    >
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Title <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleSyllabusChange(index, "title", e.target.value)}
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">
                          Duration <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={item.duration}
                          onChange={(e) => handleSyllabusChange(index, "duration", e.target.value)}
                          placeholder="e.g., 2 weeks"
                          className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-red-600 outline-none transition"
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addSyllabusItem}
                  className="mt-4 bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  + Add Syllabus
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
              >
                Add Course
              </button>
            </form>
          </div>
        )}

        {activeTab === "enrolled" && (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Enrolled Students</h2>

            {enrolledStudents.length === 0 ? (
              <p className="text-gray-600 text-center py-8">No students enrolled yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Name</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Email</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Phone</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Course ID</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Batch</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Age</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrolledStudents.map((student, index) => (
                      <tr key={student.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-medium">
                          {student.firstName} {student.lastName}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">{student.email}</td>
                        <td className="border border-gray-300 px-4 py-3">{student.phone}</td>
                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">
                          {student.courseId}
                        </td>
                        <td className="border border-gray-300 px-4 py-3">{student.batch}</td>
                        <td className="border border-gray-300 px-4 py-3">{student.age}</td>
                        <td className="border border-gray-300 px-4 py-3 capitalize">{student.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
