

import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle } from "./STYLE/styleGlobal"
import About from "./pages/About";
import Home from "./pages/Home";





function App() {

  return (
    <ThemeProvider theme={darkTheme} >
      <GlobalStyle />
      <BrowserRouter >
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
