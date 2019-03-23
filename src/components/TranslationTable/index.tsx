import React, { Component } from "react"

import {
  translationTableContainer,
  trBody,
  tr,
  td,
  table,
  tbody,
  input,
  th,
  searchKlass,
  inputCont,
  searchImg
} from "./css"

import { debounce } from "debounce"

const ROW_HEIGHT = 55

export interface Translation {
  en: string
  el: string
}

export type locales = keyof Translation

export interface Translations {
  [key: string]: Translation
}

const defaultT = (e: string) => e

interface IProps {
  onChange: (e: Translations) => void
  translations: Translations
  t?: (e: string) => string
}

interface IState {
  tmpTranslations: Translations
  keys: string[]
  availableLocales: string[]
  search?: string
  indexOfFirstElement: number
}

class TranslationTable extends Component<IProps, IState> {
  setIndex: (e: number) => void

  constructor(props: IProps) {
    super(props)
    const keys: string[] = Object.keys(props.translations).filter(e => e)
    const availableLocales = Object.keys(props.translations[keys[0]])
    this.state = {
      tmpTranslations: props.translations,
      keys,
      availableLocales,
      indexOfFirstElement: 0
    }
    this.setIndex = debounce(this.handleIndex, 100)
  }

  handleEditKey = (keyName: string, locale: string, value: string) => {
    const tmp = this.state.tmpTranslations[keyName]
    tmp[locale as locales] = value
    const tmpTranslations = {
      ...this.state.tmpTranslations,
      [keyName]: tmp
    }
    this.props.onChange(this.state.tmpTranslations)
    this.setState({ tmpTranslations })
  }

  inputSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: evt.currentTarget.value })
  }

  handleScroll = (evt: React.UIEvent<HTMLTableSectionElement>) => {
    const index = Math.floor(evt.currentTarget.scrollTop / (ROW_HEIGHT + 1))
    this.setIndex(index)
  }

  handleIndex = (indexOfFirstElement: number) =>
    this.setState({ indexOfFirstElement })

  xx = (e: number) => {
    const { indexOfFirstElement } = this.state
    const startIndex = -1
    const endIndex = indexOfFirstElement + 20
    return e > startIndex && e < endIndex
  }

  isEdited = (name: string, locale: locales) => {
    return this.props.translations[name][locale] !==
      this.state.tmpTranslations[name][locale]
      ? "edited"
      : ""
  }

  render() {
    const { availableLocales, search = "", tmpTranslations, keys } = this.state
    const t = this.props.t || defaultT

    const searchTerm = encodeURIComponent(search)
    const { translations } = this.props
    const re = new RegExp(searchTerm, "gi")
    return (
      <div className={translationTableContainer}>
        <div className={inputCont}>
          <img className={searchImg} src="/images/search.png" alt=":)" />

          <input
            onChange={this.inputSearch}
            className={searchKlass}
            placeholder={t("int.search")}
          />
        </div>

        <table className={table}>
          <thead>
            <tr className={tr}>
              <th className={th}>{t("int.name")}</th>

              {availableLocales.map((locale, idx) => (
                <th className={th} key={idx}>
                  {t(locale)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody onScrollCapture={this.handleScroll} className={tbody}>
            {/* <tbody className={tbody}> */}
            {keys
              .filter((nameKey: string, _idx: number) => {
                // first search in key
                if (~String(encodeURIComponent(nameKey)).search(re)) return true

                // then for each locale search in translated text
                // (we look both in persisted and temp translations)
                for (let locale of availableLocales) {
                  let t = translations[nameKey as string][locale as locales]
                  if (~String(t).search(re)) return true
                  t = tmpTranslations[nameKey as string][locale as locales]
                  if (~String(t).search(re)) return true
                }

                // result not found
                return false
              })
              .filter((_, idx) => this.xx(idx))
              .map((nameKey: string, idx: number) => (
                <tr className={trBody} key={idx}>
                  <td className={td}>{nameKey}</td>

                  {availableLocales.map((locale, idx) => (
                    <td className={td} key={idx}>
                      <input
                        className={`${input} ${this.isEdited(
                          nameKey,
                          locale as locales
                        )}`}
                        type="text"
                        onChange={evt =>
                          this.handleEditKey(
                            nameKey,
                            locale,
                            evt.currentTarget.value
                          )
                        }
                        value={
                          tmpTranslations[nameKey as string][locale as locales]
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TranslationTable
