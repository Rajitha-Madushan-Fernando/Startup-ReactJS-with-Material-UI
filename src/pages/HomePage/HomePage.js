import React, { useEffect } from 'react';

import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;


export default function HomePage(props) {
  // const [id, setId] = useState(false);
  // const [name, setName] = useState(false);
  // const [email, setEmail] = useState('');

  useEffect(()=>{
    //getUserDetails();
  })
  
  // const getUserDetails = (e) => {
  //   // console.log(SystemUser.get())
  //   if (SystemUser.get() != null) {
  //     setId( SystemUser.get().id)
  //     setName( SystemUser.get().name)
  //     setEmail( SystemUser.get().email)
      
  //   }
  // };

  return (
      <AppTemplate>
        <div className="home-page">
        <h1> Home page.</h1>
        </div>
      </AppTemplate>
  )
}
