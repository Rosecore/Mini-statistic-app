import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ContextExclusionPlugin } from 'webpack'
import { ContextProvider } from 'app/auth/provider/contextProvider'

render(
    <BrowserRouter >
    <ContextProvider>
                <App />
    </ContextProvider>
    </BrowserRouter>,

    document.getElementById('root')
)
