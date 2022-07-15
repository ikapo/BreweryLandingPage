import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "@/layouts/NavBar";
import { Urls } from "@/types/urls";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to={Urls.Browse} />} />
        <Route path={Urls.Browse} element={<p>Browse</p>} />
      </Routes>
    </>
  );
}

export default App;
