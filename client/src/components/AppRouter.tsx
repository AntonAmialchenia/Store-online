import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import { Context } from '../index';
import Shope from '../pages/Shope';
import { authRoutes, publicRoutes } from './../routes';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user);
    
    return (
        <Routes>
            
            {user.isAuth && authRoutes.map(({path, Component: Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component: Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<Shope/>}/>
        </Routes>
    );
};

export default AppRouter;