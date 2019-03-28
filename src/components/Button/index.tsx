import React, { FunctionComponent } from "react"
import { css } from "emotion"

interface IProps {}
const Button: FunctionComponent<IProps> = props => {
  const materialButton = css`
    border: none;
    border-radius: 3px;
    padding: 0 12px;
    background: transparent;
    height: 36px;
    cursor: pointer;
    outline: none;
    font-size: large;
    &:focus {
      background: #0001;
    }
    &:hover {
      background: #0002;
    }
    transition: 0.15s;
  `

  return <button className={materialButton}>{props.children}</button>
}

export default Button
