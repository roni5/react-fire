/**
 * React Link css js
 * React emotion Css in Js
 */

import { css } from "react-emotion";

export const links = css`
  color: hotpink;
`
export const paragraph = css`
  color: gray;

  .${links} {
    border-bottom: 1px solid color:#66cabf;
  }
`
