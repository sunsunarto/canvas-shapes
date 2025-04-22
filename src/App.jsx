import { useEffect, useRef } from 'react'
import './App.css'

function App() {

  const canvasRef = useRef()

  useEffect(() => {
    console.log("cek data canvas :", canvasRef)
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.backgroundColor = 'green'
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'black'
    
    // squre
    ctx.beginPath()
    ctx.rect(50, 50, 100, 100)
    ctx.fill()
    ctx.stroke()

    // Circle
    ctx.beginPath()
    ctx.arc(200, 200, 50, 0, Math.PI * 2, false)
    ctx.fill()
    ctx.stroke()

    // Triangle
    ctx.beginPath()
    ctx.moveTo(350, 150)
    ctx.lineTo(450, 50)
    ctx.lineTo(550, 150)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
  }, [])

  return (
    <div>
      <canvas ref={canvasRef} className='canvas' style={{display: 'block'}}></canvas>
    </div>
  )
}

export default App

