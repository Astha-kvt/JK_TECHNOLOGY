"use client"

export default function CoursesGrid({ onExplore }) {
  const courses = [
    {
      id: 1,
      title: "Python Fullstack Development",
      icon: "🐍",
    },
    {
      id: 2,
      title: "Automotive",
      icon: "🚗",
    },
    {
      id: 3,
      title: "Service Now",
      icon: "💻",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      icon: "🧠",
    },
    {
      id: 5,
      title: "Internships",
      icon: "💼",
    },
  ]

  return (
  
    <section 
    className="py-16 px-4 sm:px-6 lg:px-8 relative backdrop-blur-sm"
      style={{
        backgroundImage: `url('/bg_img.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(0.8)",
      }}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">Explore Our Courses</h1>
          <p className="text-white text-lg">Learn from industry experts and get job-ready</p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl sm:text-5xl mb-4">{course.icon}</div>
              <h3 className="font-bold text-gray-900 mb-6 text-sm sm:text-base">{course.title}</h3>
              <button
                onClick={() => onExplore(course)}
                className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition text-sm sm:text-base"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
