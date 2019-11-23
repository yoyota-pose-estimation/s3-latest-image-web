import React from "react"

export default function({ images }) {
  const size = "270px"
  return (
    <div className="d-flex flex-wrap">
      {images.map(({ src, filename }) => (
        <div key={filename}>
          <img src={src} alt={filename} width={size} height={size} />
          <p className="text-truncate" style={{ maxWidth: size }}>
            {filename}
          </p>
        </div>
      ))}
    </div>
  )
}
