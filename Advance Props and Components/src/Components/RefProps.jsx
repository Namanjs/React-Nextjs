import {useRef, forwardRef} from 'react'

//Input component that accept a ref prop
const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
  return(
    <div className='mb-4'>
      <label className='block text-gray-700 font-medium mb-2'>{label}</label>
      <input
      ref={ref}
      type='text'
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  )
})

CustomInput.displayName = "CustomInput"

function RefProps() {

  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  }

  const getInputValue = () => {
    if(inputRef.current){
      alert(`Input value: ${inputRef.current.value}`)
    }
  }

  const clearInput = () => {
    if(inputRef.current){
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  }

  return (
    <section className='p-8 bg-white rounded-xl shadow-lg m-5'>
      <h2>Ref Props</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus consequuntur, soluta ut earum beatae praesentium!</p>

      <div>
        <div>
          <h3>Try it out:</h3>

          <CustomInput
          ref={inputRef}
          label="First input with ref"
          placeholder="Type Something"
          />

          <CustomInput
          ref={secondInputRef}
          label="Second input with ref"
          placeholder="Type something else..."
          />
          
          <div className='flex flex-wrap gap-3 mt-4'>
            <button onClick={focusInput}>Focus First Input</button>

            <button onClick={focusSecondInput}>Focus second Input</button>

            <button onClick={getInputValue}>get input value</button>

            <button onClick={clearInput}>clear input</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefProps
