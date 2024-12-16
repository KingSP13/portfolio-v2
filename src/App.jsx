import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-red-700">
      <div className="bg-blue-600">Hello Tailwind</div>
      <div className="bg-blue-600">Hello Tailwind</div>
      <h1 className="text-red-500">teste de commit</h1>
      <h1 className="text-red-500">teste de commit</h1>
      <h1 className="text-red-500">teste de commit</h1>
    </div>
  )
}

export default App