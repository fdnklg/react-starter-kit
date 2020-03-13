import React from 'react';

import { ThemeProvider } from 'theme-ui';
import Theme from 'styles/Theme'
import GlobalStyles from 'styles/GlobalStyles'

const AppWrapper = () => {
  return (
    <>
      <ThemeProvider theme={Theme}></ThemeProvider>
      <GlobalStyles/>
      working!
    </>
  )
}

export default AppWrapper;