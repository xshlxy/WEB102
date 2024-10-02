import { useState } from 'react'
import './App.css'
import BaristaForm from './Components/baristaForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='title-container'>
        <h1 className='title'>
          On My Grind
        </h1>
        <p>
        So you think you can barista? Let&apos;s put that to the test...
        </p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
