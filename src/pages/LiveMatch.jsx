import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { matches } from "../data/matchesData";

function LiveMatch() {
  const { id } = useParams();

  const match = matches.find((match) => match.id === Number(id));

  if (!match) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        Match not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {match.homeTeam} vs {match.awayTeam}
          </h1>

          <p className="text-slate-400 mt-2">Group {match.group}</p>
        </div>

        <div className="bg-black rounded-3xl overflow-hidden border border-slate-800 aspect-video flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl font-bold mb-4">Live Stream</h2>

          <p className="text-slate-400 mb-6">
            Stream is available on Setanta Sports
          </p>

          <a
            href="https://app.setantasports.com/live/304585"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
          >
            Watch Live Stream
          </a>
        </div>
      </div>
    </div>
  );
}
export default LiveMatch;
