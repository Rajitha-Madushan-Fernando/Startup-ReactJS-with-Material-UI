import React from 'react'

import AppTemplate from '../Templates/AppTemplate/AppTemplate';
import { appConfig } from '../../configs/app.config';
import utils from '../../helper/utils';
const { baseUrl } = appConfig;

export default function CustomerList() {
    return (
        <AppTemplate>
            <div className="customer-list">
                <h1> Customer List page.</h1>
            </div>
        </AppTemplate>
    )
}
