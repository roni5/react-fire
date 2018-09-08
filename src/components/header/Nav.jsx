//import styled from 'react-emotion';
import { css } from "react-emotion";

/** const ulist = styled('ul')`
*	color: #C71585;
*	flex-wrap: wrap;
*	liststyle:none;
*  > li {
*		liststyle:none;
*    flex-basis: 50%;
*  }
*`;
*/
export const Nav = css`
@media all and (max-width: 400px) {
listStyle: none:
flex-wrap: wrap;
> li {
	    flex-basis: 100%;
	 }
}

`
export const li = css`
	display: inline-block;
  color: #C71585;
	flex-basis: 100%;
	margin: 0 5px;
	order: 1;
  :hover${li} {
   {color:hotpink;}
  }
`
export const search = css`
listStyle: none:
background: #C71585;
order: 1;
text-decoration:none;

`
