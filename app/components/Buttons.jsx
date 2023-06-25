"use client"

import { useState } from "react"

export default function Buttons() {
  const [counter, setCounter] = useState(0)

  return (
    <button onClick={()=>setCounter(counter + 1)}>Button {counter}</button>
  )
}
