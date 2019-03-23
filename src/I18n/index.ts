import React from "react"

export type Translate = (key: string) => string

const I18n = React.createContext<Translate>(() => "")

export default I18n
