import { css } from "emotion"
import { mq } from "../../css"

export const layoutContainer = css`
  height: 100vh;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 55px repeat(2, 1fr);
  ${mq[1]} {
    grid-template-columns: 70px repeat(2, 1fr);
    grid-template-areas:
      "header header header"
      "filters main main"
      "filters main main";
  }
  grid-template-columns: 205px repeat(2, 1fr);
  grid-template-areas:
    "header header header"
    "filters main main"
    "filters main main";
`

const common = css`
  border: solid 1px red;
`

export const header = css`
  ${common};
  grid-area: header;
`

export const filters = css`
  ${common};
  grid-area: filters;
`

export const main = css`
  ${common};
  grid-area: main;
`
