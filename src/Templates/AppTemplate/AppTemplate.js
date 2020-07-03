import React, { useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarCmp from "../AppBarCmp/AppBarCmp";
import DrawerCmp from "../DrawerCmp/DrawerCmp"; 
import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Hidden, Divider,Typography
} from '@material-ui/core';
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

}

const useStyles = makeStyles((theme) => ({ 
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppTemplate(props) {
  const { site } = props; 

  let [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setOpen(true); // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
 

  return (  
    <div className={classes.root}>  
      <CssBaseline />
      <AppBarCmp open={open} site={site} handleDrawerOpen={handleDrawerOpen}  />
      <DrawerCmp theme={theme} open={open} handleDrawerClose={handleDrawerClose}></DrawerCmp>
      <main className={classes.content}>
       <div className={classes.appBarSpacer} >
        <div className={classes.toolbar} />
        {{...props.children}} 
        </div>
      </main>
      <Box pt={4}>
          <Copyright />
      </Box>
    </div>  
  );
}