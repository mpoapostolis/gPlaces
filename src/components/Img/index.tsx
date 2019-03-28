import React, { FunctionComponent, useEffect, useState } from "react"
import { __LoadThisOnErrorImage__ as base64Img } from "../../utils"

interface IProps {
  alt?: string
  src: string
  title?: string
  onClick?: (e?: any) => any
  className?: string
  progressive?: boolean
}

const Img: FunctionComponent<IProps> = props => {
  const {
    src,
    progressive,
    title,
    className,
    onClick,
    alt = "😢🔥🔥 Error 🔥🔥😢"
  } = props
  const [_, type] = src.split(".")
  const re = new RegExp(`.${type}`)
  const minSrc = src.replace(re, `_min.${type}`)
  const [imgSrc, setImgSrc] = useState(progressive ? minSrc : src)
  useEffect(() => {
    if (progressive) {
      fetch(src)
        .then(res => res.arrayBuffer())
        .then(res => {
          const arr = Array.from(new Uint8Array(res))
          const raw = String.fromCharCode.apply(null, arr)
          const b64 = btoa(raw)
          const dataURL = `data:image/${type};base64,` + b64
          setImgSrc(dataURL)
        })
        .catch(err => console.log(err))
    }
  }, [])
  return (
    <img
      className={className}
      title={title}
      onClick={onClick}
      src={imgSrc}
      onError={e => (e.currentTarget.src = base64Img)}
      alt={alt}
    />
  )
}

export default Img
