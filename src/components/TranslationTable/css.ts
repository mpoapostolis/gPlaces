import { mq } from "./../../css"
import { css } from "emotion"

const ROW_HEIGHT = `55px`
const MAX_TABLE_HEIGHT = `65vh`
const MIN_TABLE_HEIGHT = `55px` // 1 ROW

export const translationTableContainer = css`
  padding: 20px;
  margin-top: -1px;
  width: calc(100% - 40px);
  font-size: small;
  color: #6b6b6b;
  border-radius: 2px;
  background: #fff;
  ${mq[1]} {
    font-size: xx-small;
  }
`

export const inputCont = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const searchImg = css`
  margin-right: 10px;
`

export const input = css`
  border: solid 1px #0002;
  transition: all 0.125s;
  height: 20px;
  padding: 3px;
  width: 150px;
  border-radius: 4px;
  &.edited {
    font-weight: 600;
    color: #0a3;
  }
  ${mq[2]} {
    font-size: xx-small;
  }
`
export const searchKlass = css`
  ${input};
  &:focus {
    width: 250px;
  }
`

export const table = css`
  position: relative;
  width: 100%;
  border-spacing: 0px;
`

export const th = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const tbody = css`
  display: block;
  overflow: auto;
  width: 100%;
  scroll-behavior: smooth;
  min-height: ${MIN_TABLE_HEIGHT};
  max-height: ${MAX_TABLE_HEIGHT};
  overflow-y: auto;
  &.loading {
    filter: opacity(50%);
  }
`

export const tr = css`
  display: flex;
  min-height: ${ROW_HEIGHT};
  align-items: center;
  border-bottom: solid 1px #dddddd;
`

export const trBody = css`
  ${tr};
  border-bottom: solid 1px #dddddd;
`

export const td = css`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  padding: 2px;
  justify-content: flex-start;
  align-items: center;
`
