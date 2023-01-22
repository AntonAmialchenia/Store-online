import Admin from './pages/Admin';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, DEVISE_ROUTE } from './utils/consts';
import Basket from './pages/Basket';
import Shope from './pages/Shope';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shope
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVISE_ROUTE + '/:id',
        Component: DevicePage
    },
]