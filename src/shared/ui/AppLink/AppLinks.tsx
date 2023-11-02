import { Link, LinkProps } from 'react-router-dom';
import './AppLinks.scss'


interface AppLinksProps extends LinkProps {
    className?: string,
}

export const AppLinks = ({ to, className, children,  ...otherProps }: AppLinksProps) => {
    return (
        <Link className = "AppLink" to={to}>{children}</Link>
    );
};
