function UserProfileCard({ user, theme, actions }) {
  return (
    <div className={`p-6 rounded-2xl w-full shadow-sm border border-gray-100 ${theme.backgroundColor} ${theme.textColor}`}>
      
      {/* --- TOP SECTION: Avatar & Details --- */}
      <div className="flex items-start gap-4 mb-6">
        {/* Avatar with dynamic background color */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm ${theme.avatarBg}`}>
          {user.avatar}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold leading-tight mb-1">{user.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{user.email}</p>
          
          {/* Badges for Role & Status */}
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {/* --- DIVIDER --- */}
      <hr className="border-gray-200/60 my-5" />

      {/* --- MIDDLE SECTION: Stats --- */}
      {user.stats && (
        <div className="flex justify-between text-center px-2 mb-6">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">{value}</span>
              {/* Capitalize first letter of key */}
              <span className="text-xs text-gray-500 font-medium capitalize">
                {key}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* --- BOTTOM SECTION: Actions --- */}
      <div className="flex gap-3">
        <button
          onClick={actions.primary.onClick}
          className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-transform active:scale-95 shadow-sm ${actions.primary.className}`}
        >
          {actions.primary.label}
        </button>
        <button
          onClick={actions.secondary.onClick}
          className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-transform active:scale-95 shadow-sm ${actions.secondary.className}`}
        >
          {actions.secondary.label}
        </button>
      </div>

    </div>
  )
}

import { useState } from "react";

function ComplexProps() {
  // Added state to handle the button clicks
  const [message, setMessage] = useState("Click a button to interact");

  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-purple-50", // Lighter background for better contrast
        textColor: "text-gray-800",
        avatarBg: "bg-purple-200",
        badgeBg: "bg-purple-200 text-purple-800",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-600 text-white hover:bg-purple-700",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-green-50", // Lighter background
        textColor: "text-gray-800",
        avatarBg: "bg-green-200",
        badgeBg: "bg-green-200 text-green-800",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-600 text-white hover:bg-green-700",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <div className="space-y-8 m-5 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div>
        <h3 className="text-3xl font-bold mb-4">Complex/Nested Props</h3>
        <p className="text-lg mb-4 text-gray-600">
          Complex props allow you to pass nested objects and functions, enabling sophisticated component configurations.
        </p>

        {/* Added a status bar to show button interactions work */}

        <h2 className="font-bold text-2xl mb-5">User Profile Cards:</h2>
        
        {/* Changed gap-5 to grid for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComplexProps