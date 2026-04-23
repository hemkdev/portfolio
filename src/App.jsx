import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800">Hemkdev's portfolio</h1>
      <div className="mt-4">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
