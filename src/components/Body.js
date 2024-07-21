import ResterauntCard from "./ResterauntCard";
// import resList from "../utils/MockData";
import { useState ,useEffect } from "react";

const Body = () => {
  const [listOfResteraunts, setlistOfResteraunts] = useState([]);
  const [filteredRes,setfilteredRes]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

    const fetchData= async ()=>{
      const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.87560&lng=80.91150");
      const json = await data.json();
      setlistOfResteraunts(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRes(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    };
    const [searchText,setsearchText]=useState([]);

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setsearchText(e.target.value);
          }
          }/>
          <button className="search-btn"
            onClick={()=>{
              const filteredList = listOfResteraunts.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRes(filteredList);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResteraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRes(filteredList);
          }}
        >
          Top Rated Resteraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurants) => (
          <ResterauntCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
