import {useState} from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [email, setEmail] = useState('')

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>}/>
                    <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail}/>}/>
                    {/*<Route path="*" element={</>}/>*/}
                    <Route path='/home' element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App