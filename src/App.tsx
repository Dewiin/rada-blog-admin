// Screens
import { AuthScreen } from "./components/screens/AuthScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { BlogScreen } from "./components/screens/BlogScreen";
import { PageNotFoundScreen } from "./components/screens/PageNotFoundScreen";

// Components
import { Navbar } from "./components/ui/navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <AuthScreen /> } />
          <Route path="/home" element={ <HomeScreen /> } />
          <Route path="/blog/:id" element={ <BlogScreen /> } />
          <Route path="/*" element={ <PageNotFoundScreen /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
