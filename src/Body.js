import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow"

function Body({ spotify }) {
//pull dailymix from datalayer
const [{ daily_mix }, dispatch] = useDataLayerValue();


  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img 
        src={daily_mix?.images[0].url} 
        alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{daily_mix?.name}</h2>
          <p>{daily_mix?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        
        {daily_mix?.tracks.items.map(item => (
          <SongRow track={item.track} />
        ))}
      
      </div>
    </div>
  );
}

export default Body;
