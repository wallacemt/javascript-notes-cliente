import React, {Fragment} from 'react';
import "./App.scss"
import AppRoutes from './routes';

const App = () => {
  return (
    <Fragment>
      <head> 
           <meta name="trustpilot-one-time-domain-verification-id" content="4a89f9e5-46f8-4b3a-8e48-07cd7c0676d8"/>
           <meta name="google-site-verification" content="sXuwBe0uCnkVMGMTNO9m5zh4DkbRGgA60VPq_U5ZXzg" />
      </head>
      <AppRoutes/>
    </Fragment>
  );
}

export default App;
