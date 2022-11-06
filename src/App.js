import React from "react";
import { Link,  Route, Routes} from "react-router-dom";
import Repo from "./components/Repo";
import "./App.css";
import Home from "./components/Home";
import Error404 from "./components/Error404"
import ErrorBound from "./components/ErrorBound"
import ErrorBoundary from "./components/Errorboundary";
import {Helmet} from "react-helmet"


function App() {
  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
      <title>Github Api Repo</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
      name="description"
      content="Github API project, working with github api repo in react, best react."
    />
   
      <link rel="icon" href="https://avatars.githubusercontent.com/u/74744008?v=4" />
    </Helmet>

       
    
      <nav className="nav-bar">
       
       <Link to="..">Home</Link> 
       <Link to="/Repo">Repo</Link>
       <Link to="/Error404">Error</Link>
       <Link to="/ErrorBound">ErrorBoundary</Link>
     </nav>
     <footer className="foot">Copyright: Oladosu 2022</footer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Repo" element={<Repo />} />
        <Route path="/Repo" element={<Repo />} />
        <Route path="/Repo" element={<Repo />} />
       
        <Route path="ErrorBound" element={<ErrorBound/>}/>
        <Route path="Errorboundary" element={<ErrorBoundary/>}/>


        <Route path="*" element={<Error404 />} />
      </Routes>
      
     
   </>
  )
}

export default App;
