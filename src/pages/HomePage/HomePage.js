import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
import SystemUser from "../../helper/user";
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
import AppTemplate from '../Templates/AppTemplate/AppTemplate';
const { baseUrl } = appConfig;


export default function HomePage(props) {

    
  // const constructor(props) = (e) => {
  //   super(props);
  //   this.state = { }; 
  // }
  
  const componentDidMount =(e) => {
    this.getUserDetails();
  }
  
  const getUserDetails = (e) => {
    // console.log(SystemUser.get())
    if (SystemUser.get() != null) {
      this.setState({
        id: SystemUser.get().id,
        name: SystemUser.get().name,
        email: SystemUser.get().email
      });
    }
  };

  return (
    <div>
      <AppTemplate>
        <div className="HomePage">
            <h1> Home page  </h1>
        </div>
      </AppTemplate>
    </div>
  )
}
