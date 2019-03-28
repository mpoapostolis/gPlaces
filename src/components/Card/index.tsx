import React from "react"
import { container, imgCont, infoCont, footer, body } from "./css"
import I18n from "../../I18n"
import Button from "../Button"
import { ReactComponent as Favorite } from "./favorite.svg"
import { IPlaceDetail } from "../../redux/reducers/places"

interface IProps extends IPlaceDetail {}
function Card(props: IProps) {
  return (
    <I18n.Consumer>
      {t => (
        <div className={container}>
          <div className={imgCont}>
            <img
              src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
              alt=":)"
            />
          </div>
          <div className={infoCont}>
            <section className={body}>
              <h1>Header</h1>
              <article />
            </section>
            <section className={footer}>
              <Button>{t("int.info")}</Button>
              <Favorite />
            </section>
          </div>
        </div>
      )}
    </I18n.Consumer>
  )
}

export default Card
