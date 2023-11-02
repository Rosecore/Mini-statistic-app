import { AboutPage } from "pages/aboutPage"
import { MainPage } from "pages/mainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    main = "login",
    about = "dashboard"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main] :'/login',
    [AppRoutes.about ] :'/dashboard'
}

export const RouteConfig: Record<AppRoutes, RouteProps>= {
    [AppRoutes.main ] :{
        path: RoutePath.login,
        element : <MainPage/>
    },
    [AppRoutes.about ] :{
        path: RoutePath.dashboard,
        element : <AboutPage/>
    }
}