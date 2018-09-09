import React from 'react'
import { ThemeContext } from './theme-context';

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          {...props}
          style={{ backgroundColor: theme.background, borderRadius: 4 , borderColor: theme.background}}
        > Change Theme </button>

      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;