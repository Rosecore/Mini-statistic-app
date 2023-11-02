import './styles/index.scss';
import { AppRouter } from './provider/router';
import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/navbar';
import { ContextProvider } from './auth/provider/contextProvider';
const App = () => {
    return (
        <div className="{}">
            <Suspense fallback=""> 
            <Navbar />           
                <div className='content-page'>
                    <AppRouter/>
                </div>
            </Suspense>

           
        </div>
    );
};

export default App;
