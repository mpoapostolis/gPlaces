import React from "react"
import I18n from "../../I18n"
import { container } from "./css"

function Error404() {
  return (
    <I18n.Consumer>
      {t => (
        <div className={container}>
          <img src="/images/404.png" alt={t("int.empty_page")} />
        </div>
      )}
    </I18n.Consumer>
  )
}

export default Error404
