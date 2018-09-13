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
  font-size: 1em;
  text-align: center;
  margin: 0.5em;
  padding: 0;
  color: black;

`;
const UserItem = ({ user, ...restProps }) => (
  <Users {...restProps}>
    <User >  Welcome {user}</User>
 


	</Users>
);

export default UserItem;