import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBarU from "./layout/appbar";


function App() {
  const [dark, setdark] = React.useState(false)

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: dark ? 'dark' : 'light',
        },
      }),
    [dark],
  );

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  

  return (
    <ThemeProvider theme={theme}>
      <AppBarU></AppBarU>
      <CssBaseline/>
      <FormControlLabel
        control={<IOSSwitch checked={dark} onChange={() => setdark(!dark)} name="checkedB" />}
        label="Dark"
      />
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Light</Grid>
          <Grid item>
            <IOSSwitch checked={dark} onChange={() => setdark(!dark)} name="dark" />
          </Grid>
          <Grid item>Dark</Grid>
        </Grid>
      </Typography>
      <h1>Hello Theme</h1>
    </ThemeProvider>
  );
}

export default App;