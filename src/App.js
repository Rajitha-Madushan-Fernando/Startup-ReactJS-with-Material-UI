import React, { useState, useEffect } from "react"; 
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Router, Switch, Route, Link, useHistory } from 'react-router-dom';  
import 'react-toastify/dist/ReactToastify.css'; 
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage'; 
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';
import { interceptor } from './interceptor'; 

import utils from './helper/utils'; 

const drawerWidth = 240; 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },   
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



export default function App (props) {
  const history = useHistory();
  const [isHideSpinner, setIsHideSpinner] = useState(0);  
  const authExList = [
    'api/user/login',
    'api/user/',
  ]
  
  // this way equal to componentDidMount()
  useEffect(() => {  
    setIsHideSpinner(true);
    // this way equal to componentWillMount()
    interceptor(authExList, (authData)=>{ 
      const {loaderIsHide, redirectTo} = authData;
      setIsHideSpinner(loaderIsHide);    
      if(redirectTo!=''){
        history.push(redirectTo);
      }
    });
  },[]);
  
  const { window } = props;
  const classes = useStyles();   

  const container = window !== undefined ? () => window().document.body : undefined;

  return ( 
    <Router history={history}>
      <Switch> 
        <Route exact path="/signin" component={SignIn} />
        <Route path="/" exact component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
      {isHideSpinner?'':<LoadingSpinner />}
    </Router>  
  );
}
 