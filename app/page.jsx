"use client"
import { useState } from "react"
import Header from "@/components/header"
import CoursesGrid from "@/components/courses-grid"
import LearningPage from "@/components/learning-page"
import HireWithUs from "@/components/hire-with-us"
import AdminDashboard from "@/components/admin-dashboard"

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [currentPage, setCurrentPage] = useState("home")

  if (currentPage === "admin") {
    return <AdminDashboard onBack={() => setCurrentPage("home")} />
  }

  if (currentPage === "hire") {
    return <HireWithUs onBack={() => setCurrentPage("home")} />
  }

  if (selectedCourse) {
    return <LearningPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />
  }

  return (
    <main className="min-h-screen bg-white">
      <Header onNavigate={setCurrentPage} />
      <CoursesGrid onExplore={setSelectedCourse} />
    </main>
  )
}
