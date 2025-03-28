import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Fondo from './Fondo'
import Texto from './Texto'
import Mayor from './Mayor'
import MostrarObjeto from './MostrarObjeto'
import Lista from './Lista'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Fondo />
      <Texto />
      <Mayor />
      <MostrarObjeto />
      <Lista />
    </div>
  )
}

export default App
