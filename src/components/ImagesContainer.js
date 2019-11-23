import React, { useState, useEffect } from "react"
import axios from "axios"
import Images from "./Images"
import useMergedStore from "../models/MergedStore"

axios.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

function mapImages(image) {
  const prefix = `${localStorage.getItem("s3Endpoint")}/`
  const src = image.replace("s3://", prefix)
  const filename = src.split("/").pop()
  return { src, filename }
}

export default function({ pathPrefix }) {
  const [images, setImages] = useState([])
  const { time } = useMergedStore()
  useEffect(() => {
    async function fetchImages() {
      const res = await axios.get(
        `/api/path/prefix/${pathPrefix}?time=${time.time}`
      )
      setImages(res.images.map(mapImages))
    }
    if (!pathPrefix) {
      return
    }
    fetchImages()
  }, [pathPrefix, time.time])
  return <Images images={images} />
}
