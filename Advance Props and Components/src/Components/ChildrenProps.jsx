import { useState } from "react"

// 1. Updated Card styles to match the image (Light backgrounds instead of dark)
function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-100",     // Changed from bg-blue-500
    green: "border-green-500 bg-green-100",   // Changed from bg-green-500
    purple: "border-purple-500 bg-purple-100", // Fixed typo (pruple -> purple) and made light
    red: "border-red-500 bg-red-100"          // Changed from bg-red-500
  };

  return (
    <div className={`border-l-6 border-t-3 p-6 rounded-2xl shadow-lg  ${colorClasses[color]}`}>
      {title && <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>}
      <div className="text-gray-700 w-full">{children}</div>
    </div>
  )
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4"
  };

  return (
    <div className={layoutClasses[layout]}>{children}</div>
  )
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg m-5">

      <h2 className="text-4xl font-bold mb-3">Children Props</h2>
      <p className="my-2 text-xl ">The <span className="bg-gray-400 px-1 py-2 rounded-lg">children</span> prop allows you to pass JSX components as children to other components, enabling component composition.</p>

      <div className="space-y-6"> {/* Fixed typo: spacy-y-6 -> space-y-6 */}

        <div>
          <h3 className="mb-3 text-2xl font-semibold">Card components with children :-</h3>
          <Container layout="grid">
            
            {/* Card 1: User Profile */}
            <Card title="User Profile" color="blue">
              <p className="mb-2"><strong>Name:</strong> Naman Agarwal</p>
              <p className="mb-2"><strong>Email:</strong> Naman@something.com</p>
              <p className="mb-2"><strong>Role:</strong> Developer</p>
            </Card>

            {/* Card 2: Statistics */}
            <Card title="Statistics" color="green">
              <p className="mb-2"><strong>Total Users:</strong> 1200</p>
              <p className="mb-2"><strong>Active Sessions:</strong> 742</p>
              <p className="mb-2"><strong>Revenue:</strong> $83,000</p>
            </Card>

            {/* Card 3: Quick Actions (Added) */}
            <Card title="Quick Actions" color="purple">
              <div className="flex flex-col gap-3">
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm">
                  Create New
                </button>
                <button className="w-full bg-gray-600 text-white py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors shadow-sm">
                  View All
                </button>
              </div>
            </Card>

            {/* Card 4: Warning (Added) */}
            <Card title="Warning" color="red">
              <p className="text-gray-800 font-medium">
                Your trial period ends in 5 days. Please upgrade your account to continue using all features.
              </p>
            </Card>

          </Container>
        </div>

      </div>

    </section>
  )
}

export default ChildrenProps