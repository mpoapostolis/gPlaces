import { css } from "emotion"

export const container = css`
  width: 350px;
  height: 382px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #0003;
`
export const imgCont = css`
  width: 350px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  img {
    object-fit: cover;
    &:hover {
      transform: scale3d(1.3, 1.3, 1.3);
    }
    transition: transform 5s;
  }
`

export const infoCont = css`
  padding: 0 15px;
`
