import * as React from "react"
import { type FormEvent } from "react"

type TimerInput = {
  hr: number
  min: number
  sec: number
}

function App() {
  const [input, setInput] = React.useState<TimerInput>({
    hr: 0,
    min: 0,
    sec: 0,
  })

  const [timer, setTimer] = React.useState<number>(0)
  const [watch, setWatch] = React.useState<number>(0)

  const tickSound = React.useRef(new Audio("/tick.mp3"))
  const alarmSound = React.useRef(new Audio("/timerover.mp3"))

  let hours = Math.floor(timer / 3600)
  let minutes = Math.floor((timer % 3600) / 60)
  let seconds = timer % 60

  if (watch) {
    hours = Math.floor(watch / 3600)
    minutes = Math.floor((watch % 3600) / 60)
    seconds = watch % 60
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const data: TimerInput = {
      hr: Number(formData.get("hr") ?? 0),
      min: Number(formData.get("min") ?? 0),
      sec: Number(formData.get("sec") ?? 0),
    }

    setInput(data)

    const timerCount = data.hr * 3600 + data.min * 60 + data.sec

    setTimer(timerCount)

    alert(`starting a timer for ${data.hr}hr ${data.min}min ${data.sec}sec`)
  }

  React.useEffect(() => {
    if (timer <= 0) return
    const interval = setInterval(() => {
      tickSound.current.currentTime = 0
      tickSound.current.play()
      setTimer(prev => {
        if (prev <= 1) {
          alarmSound.current.currentTime = 0
          alarmSound.current.play()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  const watchInterval = React.useRef<number | null>(null)

  const handleWatch = () => {
    if (watchInterval.current !== null) return

    watchInterval.current = window.setInterval(() => {
      setWatch(prev => prev + 1)
    }, 1000)
  }

  React.useEffect(() => {
    return () => {
      if (watchInterval.current !== null) {
        window.clearInterval(watchInterval.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0f0f0] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl bg-[#161616] border border-[#d4ff00] shadow-[0_0_30px_#d4ff0033] rounded-2xl p-8">
        <h1 className="text-4xl font-black text-[#d4ff00] text-center tracking-widest mb-8 drop-shadow-[0_0_10px_#d4ff00]">
          STOP WATCH & TIMER
        </h1>

        <form className="flex gap-3 justify-center" onSubmit={handleSubmit}>
          <input
            name="hr"
            type="number"
            placeholder="hr"
            min={0}
            className="w-20 bg-[#0e0e0e] border border-[#666] text-[#f0f0f0] px-3 py-2 rounded-lg outline-none focus:border-[#d4ff00] focus:shadow-[0_0_12px_#d4ff00]"
          />
          <input
            name="min"
            type="number"
            placeholder="min"
            min={0}
            className="w-20 bg-[#0e0e0e] border border-[#666] text-[#f0f0f0] px-3 py-2 rounded-lg outline-none focus:border-[#d4ff00] focus:shadow-[0_0_12px_#d4ff00]"
          />
          <input
            name="sec"
            type="number"
            placeholder="sec"
            min={0}
            className="w-20 bg-[#0e0e0e] border border-[#666] text-[#f0f0f0] px-3 py-2 rounded-lg outline-none focus:border-[#d4ff00] focus:shadow-[0_0_12px_#d4ff00]"
          />

          <button
            type="submit"
            className="bg-[#d4ff00] text-black font-bold px-5 py-2 rounded-lg hover:shadow-[0_0_20px_#d4ff00] transition"
          >
            START TIMER
          </button>
        </form>

        {timer > 0 && (
          <div className="mt-8 flex items-center justify-center gap-3 text-3xl font-mono text-[#d4ff00]">
            <p>{hours}hr</p>:<p>{minutes}min</p>:<p>{seconds}sec</p>

            <button
              onClick={() => setTimer(0)}
              className="ml-4 text-sm bg-transparent border border-[#d4ff00] text-[#d4ff00] px-4 py-2 rounded-lg hover:bg-[#d4ff00] hover:text-black transition"
            >
              Stop
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 w-full max-w-xl bg-[#161616] border border-[#666] rounded-2xl p-6 text-center shadow-[0_0_20px_#000]">
        <p className="text-[#666] uppercase tracking-[0.3em] mb-4">
          StopWatch
        </p>

        <button
          onClick={handleWatch}
          className="bg-[#d4ff00] text-black font-bold px-8 py-2 rounded-lg hover:shadow-[0_0_20px_#d4ff00] transition"
        >
          Start
        </button>

        {watch > 0 && (
          <div className="mt-6 flex items-center justify-center gap-3 text-3xl font-mono text-[#d4ff00]">
            <p>{hours}hr</p>:<p>{minutes}min</p>:<p>{seconds}sec</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App