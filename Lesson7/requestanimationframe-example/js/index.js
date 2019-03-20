( function() {
  let canvas
  let context
  let toggle
  let request
  
  const start = document.getElementById('start')
  const stop = document.getElementById('stop')
  

  const init = () => {
    canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256

    context = canvas.getContext('2d')

    document.body.appendChild(canvas)
  }

  const animate = () => {
    request = requestAnimationFrame(animate)
    draw()
  }

const draw = () => {
    const time = Date.now() * 0.002
    const x = Math.sin(time) * 100 + 128
    const y = Math.cos(time * 0.42) * 100 + 128
    toggle = !toggle

    context.fillStyle = toggle ? '#f7941e' : '#F4F1BB'
    context.beginPath()
    context.arc(x, y, 15, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()
  }

  init()

  start.addEventListener('click', () => {
    animate()
    start.style.backgroundColor = "#25436e"
    stop.style.backgroundColor = "#3771a1"
  })
  stop.addEventListener('click', () => {
    cancelAnimationFrame(request) //stop the animation
    context.clearRect(0, 0, canvas.width, canvas.height) //clear the canvas
    stop.style.backgroundColor = "#25436e"
     start.style.backgroundColor = "#3771a1"
   })

  /* code built upon on an example from https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/  and
 https://flaviocopes.com/requestanimationframe/ */
})()