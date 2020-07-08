import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarCmp from "../AppBarCmp/AppBarCmp";
import DrawerCmp from "../DrawerCmp/DrawerCmp"; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


export default function AppTemplate(props) {
  const { site } = props; 
  const theme = useTheme();
  let [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setOpen(false); // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  const toggleDrawerHandler = () => {
    console.log('toggleDrawerHandler apptemplate');
    setOpen(!open);
  };
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (  
    <div className={classes.root}>  
      <CssBaseline />
      <AppBarCmp open={open} site={site} toggleDrawerHandler={toggleDrawerHandler}  />
      <DrawerCmp theme={theme} open={open} toggleDrawerHandler={toggleDrawerHandler}></DrawerCmp>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {{...props.children}} 
      </main>
    </div>  
  );
}