import { UPDATE_I18N, UPDATE_LANG } from "../names"
import translations from "../../I18n/defaultTranslations.json"
import assoc from "ramda/es/assoc"
import { AnyAction } from "redux"

export interface II18n {
  lang: string
  translations: object
  availableLangs: Array<string>
}

const initI18n = {
  lang: "en",
  translations,
  availableLangs: ["en", "el"]
}

const i18n = (state = initI18n, action: AnyAction) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_I18N:
      return assoc("translations", payload, state)
    case UPDATE_LANG:
      return assoc("lang", payload, state)

    default:
      return state
  }
}

export default i18n
