import React from 'react'
//import { Link } from 'react-router-dom';
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
export const Links = (
  <Links page="http://www.facebook.com">Facebook</Links>
)
