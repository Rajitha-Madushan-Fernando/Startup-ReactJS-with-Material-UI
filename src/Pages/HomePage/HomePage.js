import React from 'react'
import AppTemplate from "../../Templates/AppTemplate/AppTemplate";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chart from '../Chart/Chart';
import Deposits from '../Deposits/Deposits';
import Orders from '../Orders/Orders';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <div>
            <AppTemplate>
                 <div className="home-page">
                    This is a home page
                </div>
            </AppTemplate>
        </div>
    )
}
