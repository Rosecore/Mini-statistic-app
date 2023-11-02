import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { AppLinks} from 'shared/ui/AppLink/AppLinks';
import AuthHook from 'app/auth/hooks/AuthHook';

interface NavbarProps{
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    const { isAuthenticated } = AuthHook()
    return (
        <div className='navbar'>
            <div >
                <AppLinks  to={'/login'}>Логин</AppLinks>
                {isAuthenticated &&  <AppLinks  to={'/dashboard'}>Дашборд</AppLinks>}
               
            </div>
        </div>
    );
};
