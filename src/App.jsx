import {AccountPage} from "./pages/AccountPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Routes, Route}  from "react-router-dom"
import {LoginPage} from "./pages/LoginPage"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<AccountPage/>}></Route>
          <Route  path="/LoginPage" element={<LoginPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
