import React from "react"
import Input from "./Input"
import useMergedStore from "../models/MergedStore"

export default function() {
  const { time } = useMergedStore()
  return (
    <Input
      label="time"
      value={time.time}
      onChange={e => {
        time.setTime({ time: e.target.value })
      }}
    />
  )
}
