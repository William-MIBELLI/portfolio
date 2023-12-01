import { useEffect } from "react";
import Aos from "aos";
import Home from "./components/home/home";
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init({
      delay: 300
    })
  },[])

  return (
    <Home/>
  );
}

export default App;
