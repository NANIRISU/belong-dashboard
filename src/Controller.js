import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './component/dashboardLayout/DashboardLayout';
import Home from './screen/home/Home';
import Recruitment from './screen/recruitment/Recruitment';
import Onboarding from './screen/onboarding/Onboarding';
import Reports from './screen/reports/Reports';
import Calendar from './screen/calendar/Calendar';
import Settings from './screen/settings/Settings'


 const Controller=()=>{
    
     return(
        <BrowserRouter >
        <Switch>
        
        <DashboardLayout>
            <Route exact path="/" render={(props)=><Home {...props} />}/>
            <Route path ="/coaching" render={(props)=><Recruitment {...props}/>}/>
            <Route path="/collaborations" render={(props)=><Onboarding {...props}/>}/>
            <Route path="/progress" render={(props)=><Reports {...props}/>}/>
            <Route path="/calendar" render={(props)=><Calendar {...props}/>}/>
            <Route path="/knowledge" render={(props)=><Settings {...props}/>}/>
            </DashboardLayout>
        </Switch>
       
        </BrowserRouter>
     )
 }

 export default Controller;