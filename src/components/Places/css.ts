import { css } from "emotion"
import { mq } from "../../css"

export const container = css`
  padding: 10px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mq[0]} {
    justify-content: center;
  }
`
