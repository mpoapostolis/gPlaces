import React from "react"
import { container, imgCont, infoCont } from "./css"

interface IProps {}
function Card() {
  return (
    <div className={container}>
      <div className={imgCont}>
        <img
          src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
          alt=":)"
        />
      </div>
      <div className={infoCont}>
        <section>
          <h1>Header</h1>
          <article>
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          </article>
        </section>
      </div>
    </div>
  )
}

export default Card
