import { css } from "emotion"
import { mq } from "../../css"

export const layoutContainer = css`
  height: 100vh;
  display: grid;
  grid-gap: 7px;
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`

const common = css`
  /* border: solid 1px red; */
  box-shadow: 0 0 1px 1px #0002;
`

export const header = css`
  ${common};
  grid-area: header;
`

export const main = css`
  ${common};
  overflow: auto;
  grid-area: main;
`
