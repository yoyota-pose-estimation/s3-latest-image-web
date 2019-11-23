import React from "react"
import Input from "./Input"
import useLocalStorage from "./useLocalStorage"

export default function({ label }) {
  const [value, onChange] = useLocalStorage(label)
  return <Input label={label} value={value} onChange={onChange} />
}
