'use client'

import { ChangeEvent, useState } from "react"

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }

  return (
    <>
      <input
        onChange={onFileSelect}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible w-0 h-0"
      />

      {preview && 
      <img
        src={preview}
        alt="image"
        className="w-full aspect-video rounded-lg object-cover"
      />}
    </>
  )
}