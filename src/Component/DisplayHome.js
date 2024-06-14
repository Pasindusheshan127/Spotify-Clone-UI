import NavBar from "./NavBar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongsItem from "./SongsItem";
const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Feature Charts</h1>
          <div className="flex overflow-auto">
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.desc}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
          <div className="flex overflow-auto">
            {songsData.map((item, index) => (
              <SongsItem
                key={index}
                name={item.name}
                description={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
