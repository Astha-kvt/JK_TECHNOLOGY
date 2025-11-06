"use client"

export default function Header({ onNavigate }) {
  return (
    <header className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 cursor-pointer hover:opacity-90"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-lg">J</span>
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base">Jacks</div>
              <div className="text-xs sm:text-sm">Technologies</div>
            </div>
          </button>

          {/* Navigation */}
          <nav className="hidden sm:flex gap-8 font-semibold text-sm">
            <button onClick={() => onNavigate("home")} className="hover:opacity-90">
              HOME
            </button>
            <a href="#" className="hover:opacity-90">
              COURSES
            </a>
            <button onClick={() => onNavigate("hire")} className="hover:opacity-90">
              HIRE WITH US
            </button>
            <button onClick={() => onNavigate("admin")} className="hover:opacity-90">
              ADMIN DASHBOARD
            </button>
            <a href="#" className="hover:opacity-90">
              INTERNSHIPS
            </a>
            <a href="#" className="hover:opacity-90">
              LOGIN
            </a>
          </nav>

          {/* Mobile Menu */}
          <button className="sm:hidden text-white">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>
    </header>
  )
}
