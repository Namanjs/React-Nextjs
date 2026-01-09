import BasicProps from "./Components/BasicProps.jsx";
import ChildrenProps from "./Components/ChildrenProps.jsx";
import ComplexProps from "./Components/ComplexProps.jsx";
import RefProps from "./Components/RefProps.jsx";
import ThemeToggler from "./Components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "🥡" },
    { id: "ref", label: "Ref Props", icon: "⛓️‍💥" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" }
  ]

  return (
    <nav className="sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              className="text-white px-4 py-2 rounded-lg font-bold bg-blue-600 mr-2 mt-2 hover:bg-blue-800"
              key={section.id}>
              <span className="mr-5">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent() {
  const isDark = true;
  return (
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <div className="container mx-auto py-4 px-4 flex justify-center flex-wrap">
        <header className="text-white flex flex-col gap-4 items-center">
          <h1 className="text-6xl font-bold mt-6 mb-3">Reacts Props Explained</h1>
          <p className="text-2xl font-light mb-4">A comprehensive guide to understanding props in React</p>
          <p className="font-bold text-2xl mb-5">Built with Bun + Vite + React + Tailwind CSS</p>
        </header>
      </div>

      <div className="space-y-8">
        <div id="basic" className="scroll-mt-200">
          <BasicProps />
        </div>
      </div>

       <div className="space-y-8">
        <div id="basic" className="scroll-mt-200">
          <ChildrenProps />
        </div>
      </div>
      
    </div>
  )
}

function App() {
  return (
    <>
      <AppContent />
    </>
  )
}

export default App
