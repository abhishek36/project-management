import React, {useState , useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import ReactLoading from 'react-loading';
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

function App() {
  const [done, setDone] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      setDone(true)
    }, 2500);
  },[])
  return (
    <div>
      {!done ?
      <div className="loading">
          <span className="loading-head">Project-Management-App</span>
          <ReactLoading type={"cylon"} color={"#15102c"} height={100} width={100}/>
      </div>
    :
      <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateProject}/>
          </Switch>
      </div>
      </BrowserRouter>
      }
    </div>
  )
}

export default App;
