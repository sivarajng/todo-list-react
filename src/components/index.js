import Home from './Home'
import NavBar from './NavBar'

import '../stylesheets/index.scss'

export const App = ({ children }) =>
    <div className="app">

        <NavBar />
        {children}

    </div>

export const PageNotFound = ({ location }) =>
    <div className="whoops-404">
        <h1>Page not found</h1>
        <p>Cannot find content for {location.pathname}</p>
    </div>