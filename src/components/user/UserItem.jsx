import React from 'react';
import styled from 'react-emotion';

const User = styled('p')`
    background: #EE82EE;
    font-size: 1.5em;
    text-align: center;
    margin: 0.5em;
    padding: 0;
    color: #C71585;
  `;
  const Users = styled('h2')`
  font-size: 2em;
  text-align: center;
  margin: 0.5em;
  padding: 0;
  color: black;
`;
const UserItem = ({ user, ...restProps }) => (
	<User {...restProps}>
 <Users> <h2 >Hello!!! </h2></Users>
		<p user={"Roni"}>I am </p>
	</User>
);

export default UserItem;