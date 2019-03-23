import { css } from "emotion"
import { mq } from "../../css"

export const layoutContainer = css`
  height: 100vh;
  display: grid;
  grid-gap: 7px;
  grid-template-rows: 55px repeat(2, 1fr);
  grid-template-columns: 205px repeat(2, 1fr);
  grid-template-areas:
    "header header header"
    "filters main main"
    "filters main main";

  ${mq[1]} {
    grid-template-rows: 55px 75px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "filters"
      "main";
  }
`

const common = css`
  /* border: solid 1px red; */
  box-shadow: 0 0 1px 1px #0002;
`

export const header = css`
  ${common};
  grid-area: header;
`

export const filters = css`
  ${common};
  grid-area: filters;
  overflow: auto;
  ${mq[1]} {
    display: flex;
    justify-content: space-between;
  }
`

export const main = css`
  ${common};
  grid-area: main;
`
