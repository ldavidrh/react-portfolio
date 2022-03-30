import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contact/" element={<Contact />}></Route>
          {/* <Route path="about/" element={<About />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
