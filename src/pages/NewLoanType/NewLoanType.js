import React, { useEffect } from 'react';

import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;


export default function NewLoanType(props) {
  return (
      <AppTemplate>
        <div className="new-loan-type">
        <h1> Add new loan type page.</h1>
        </div>
      </AppTemplate>
  )
}
