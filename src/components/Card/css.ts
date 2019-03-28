import { css } from "emotion"

export const container = css`
  width: 350px;
  height: 382px;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #0003;
  margin: 10px 0 10px 0;
`
export const imgCont = css`
  width: 350px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
    &:hover {
      transform: scale3d(1.3, 1.3, 1.3);
    }
    transition: transform 5s;
  }
`

export const infoCont = css`
  height: calc(100% - 220px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 15px 10px 15px;
`
export const body = css`
  height: calc(100% - 40px);
`

export const footer = css`
  height: 40px;
  align-items: center;
  display: flex;
`

export const favorite = css`
  cursor: pointer;
  fill: #f002;
  &.favorited {
    fill: #f00;
  }
  &:hover {
    fill: #f00;
  }
  transition: 0.25s;
`

export const location = css`
  cursor: pointer;
  fill: #5aabfaca;
  &:hover {
    fill: #5aabfa;
  }
  transition: 0.25s;
`
