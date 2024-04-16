import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './User'
import CreateUsers from './CreateUser'
import UpdateUsers from './UpdateUser'
import Home from './Home'
import ProfilePage from './ProfilePage'
import Filter from './Filter'
import Search from './Search'
import Graphing from './Graph'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/profile/:id' element={<ProfilePage />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/create' element={<CreateUsers />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
          <Route path='/filter' element={<Filter/>}> </Route>
          <Route path='/search' element={<Search/>}> </Route>
          <Route path='/graph' element={<Graphing/>}> </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
