import { useState } from "react"

function Button({ text, color, size, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
      ${size === "small" ? 'text-sm px-2 py-1' : ""}
      ${size === "large" ? 'text-lg px-8 py-3' : ""}
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
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2>Basic Props</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae repudiandae accusamus corrupti natus? Aut, non. Quas doloribus blanditiis cum ratione!</p>
      <div className="space-y-4">
        <h3>Different Colors; Click Count: {clickCount}</h3>
        <div className="flex flex-wrap gap-3">
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
          <h3>Different Sizes; Click Count: {clickCount}</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              text="Small Button"
              size="small"
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
        </div>
      </div>
    </section>
  )
}

export default BasicProps
