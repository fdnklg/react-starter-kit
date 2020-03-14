/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export default p => {
  return (
    <Box
      sx={{
        mx: 'auto',
        height: ['100vh'],
        width: ['100vw'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
    I'm the AppWrapper. Add your Components here!
    </Box>
  )
}