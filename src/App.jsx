import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MatchesPage from "./pages/MatchesPage";
import StandingsPage from "./pages/StandingsPage";
import LiveMatch from "./pages/LiveMatch";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/standings" element={<StandingsPage />} />
      <Route path="/live/:id" element={<LiveMatch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;