import React from "react"
import Input from "./Input"
import ImagesContainer from "./ImagesContainer"
import useLocalStorage from "./useLocalStorage"

export default function({ label }) {
  const [pathPrefix, onChange] = useLocalStorage(label)
  return (
    <>
      <Input label={label} value={pathPrefix} onChange={onChange} />
      <ImagesContainer pathPrefix={pathPrefix} />
    </>
  )
}
