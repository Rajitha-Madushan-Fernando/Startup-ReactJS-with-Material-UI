import axios from 'axios';
import { Promise } from "es6-promise"; 
import tokens from './helper/tokens'; 

export const interceptor =  function(excludeUrl, cb) {  
  console.log('interceptor init');
  axios.interceptors.request.use((request) => { 
    console.log('request',request);
    cb({loaderIsHide:false, redirectTo:''})
      const token = tokens.get('token');
      const authuser = tokens.get('userType'); 
      request.headers['Authorization'] = `Bearer ${token}`;
      request.headers['Authorization-authuser'] = `${authuser}`;
    return request;
  });
  
  axios.interceptors.response.use(
    (response) => {
      console.log('response', response);
      // Return a successful response back to the calling service
      cb({loaderIsHide:true, redirectTo:''})
      return response;
    },
    (error) => {
      
      if (error.response.status == 401) {
        let redirectTo = ''
        redirectTo = '/signin';
        if(error.response.data.path.indexOf("api/auth/signin") < 0){ 
          redirectTo = '/signin';
        }
        cb({loaderIsHide:true, redirectTo})
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      else {
        cb({loaderIsHide:true, redirectTo:''})
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      
    });
  }