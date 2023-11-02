import { AboutPage } from 'pages/aboutPage';
import { MainPage } from 'pages/mainPage';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeconfig/RouteConfig';

const AppRouter = () => {
    return (
        <Suspense fallback=''>
            <Routes>
                { Object.values(RouteConfig).map(({element, path})=>(
                    <Route 
                        key= {path}
                        element = {<div className='page-wrapper'>{element}</div>}
                        path= {path}/>                        
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;