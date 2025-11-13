import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './layout/MainLayout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { TaskPage } from './pages/TasksPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/about-me" element={<AboutPage/>}></Route>
          <Route path="/tasks" element={<TaskPage/>}></Route>
        </Route>
      </Routes>  
    </>
  )
}

export default App
