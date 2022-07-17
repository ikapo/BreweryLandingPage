import { Navigate, Route, Routes } from "react-router-dom";
import { Urls } from "@/types/urls";
import { BrowsePage } from "@/pages/Browse";
import { FavoritesPage } from "@/pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={Urls.Browse} />} />
      <Route path={Urls.Browse} element={<BrowsePage />} />
      <Route path={Urls.Favorites} element={<FavoritesPage />} />
    </Routes>
  );
}

export default App;
