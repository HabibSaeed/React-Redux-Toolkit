import { useState } from 'react'
import Header from './Components'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Assalam O Alaikum We Using React Redux for State Management</h1>
      <Header />
    </>
  )
}

export default App
