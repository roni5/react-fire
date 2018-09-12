//import styled from 'react-emotion';
import { css } from "react-emotion";

/** const ulist = styled('ul')`
*	color: #C71585;
*	flex-wrap: wrap;
*	liststyle:none;
*  > li {
*		liststyle:none;
*    flex-basis: 50%;
text-decoration:none;
*  }
*`;
*/
export const Nav = css` {
	margin-top: 18px;
	padding-top: 1em
	height: 30px;
	-webkit-transition: background .125s ease;
  transition: background .125s ease;
@media all and (max-width: 400px) {
listStyle: none:
flex-wrap: wrap;
height: 27px;

> li {
			flex-basis: 100%;
			padding: 5px 7px;
	 }
 }
}
`
export const li = css`
	display: inline-block;
	padding: 7px 10px;
	border-radius: 3px;
  color: #fff;
	flex-basis: 100%;
	margin: 12px 5px;
	order: 1;
	background:#c71585;
  :hover${li} {
   {background:#ff; color: hotpink;}
  }
`
export const search = css`
background: #fff;
order: 1;
`
export const input = css`
background: #fff;
:focus {
    outline: none !important;
    box-shadow: 0 0 2px #719ECE;
}
`