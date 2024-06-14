import "./App.css";
import Sidebar from "./Component/Sidebar";
import Player from "./Component/Player/Player";
import Display from "./Component/Display";
import { useContext } from "react";
import { PlayerContext } from "./Component/Context/PlayerContext";

function App() {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
