import React, { useEffect } from 'react';

import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;


export default function HomePage(props) {
  return (
      <AppTemplate>
        <div className="home-page">
        <h1> Home page.</h1>
        </div>
      </AppTemplate>
  )
}
