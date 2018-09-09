import React from 'react'

const dark = styled('div')`
	color: black;
	flex-wrap: wrap;
`;


const Toolbar = ({theme}) => {
  return (
    <div>
    <ThemedButton theme={theme} />
    </div>
  )
}

export default Toolbar
