import { useState } from "react"

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
      ${size === "small" ? "text-sm px-3" : ""}
      ${size === "large" ? 'text-lg px-8 py-4' : ""}
      ${color === "primary" ? 'bg-blue-500 hover:bg-blue-600 text-white' : ""}
      ${color === "secondary" ? 'bg-gray-500 hover:bg-gray-600 text-white' : ""}
      ${color === "danger" ? 'bg-red-500 hover:bg-red-600 text-white' : ""}
      ${color === "success" ? 'bg-green-500 hover:bg-green-600 text-white' : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  )
}

function BasicProps() {

  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl m-5">
      <h1 className="text-4xl font-bold mb-4">Basic Props</h1>
      <p className="text-xl mb-4">Props are arguments passed to React Components. They allow you to pass data from parent to child Components.</p>
      <div className="space-y-4">

        <h2 className="text-2xl font-bold">Different Colors</h2>

        <div className="flex flex-wrap gap-3 items-center">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Different Sizes</h3>
          <div className="flex flex-wrap gap-3 items-center">
            <Button
              text="Small"
              size="small"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="Medium(Default)"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="Large"
              size="large"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-2xl font-bold">Different Sizes</h3>

          <div className="flex flex-wrap gap-3 items-center">
            <Button
              text="Enabled Button"
              color="primary"
              onClick={() => setClickCount(clickCount + 1)}
            />
            <Button
              text="Disabled Button"
              color="primary"
              disabled={true}
              onClick={() => setClickCount(clickCount + 1)}
            />

          </div>
        </div>

        <div className="space-y-4 bg-blue-200 rounded-2xl">
            <h1 className="px-6 py-3 text-2xl">Click Count: <span className="text-blue-700 font-bold">{clickCount}</span></h1>
        </div>

      </div>
    </section>
  )
}

export default BasicProps
