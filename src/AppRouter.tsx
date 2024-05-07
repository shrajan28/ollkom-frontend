import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Subscription from './Desktop/Subscription'
import Home from './Home'

function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home title=''/>}></Route>
        <Route path='/subscription' element={<Subscription title={""}/>}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default AppRouter
