import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    width: "70%",
    height: "60vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 1,
  });

  const loadData = async () => {
    await fetch("https://corona-api.com/countries")
      .then((res) => res.json())
      .then((res) => {
        const tempData = res.data.sort(
          (a, b) => b.latest_data.confirmed - a.latest_data.confirmed
        );
        setApiData(tempData);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };
  const handleClick = (val) => {
    setViewport({
      ...viewport,
      latitude: val.coordinates.latitude,
      longitude: val.coordinates.longitude,
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="live-report-wrapper container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      ></ReactMapGL>
      <div className="live-report">
        <div className="live-report-head">Live Reports</div>
        <div className="live-report-body">
          {loading && <p className="live-report-loading">Loading...</p>}
          {!loading && (
            <div className="live-report-list">
              {apiData.map((ele, index) => {
                return (
                  <div
                    key={ele.population + index}
                    onClick={() => handleClick(ele)}
                    className="live-report-list-item"
                  >
                    <div className="live-report-list-name">{ele.name}</div>
                    <div className="live-report-list-count">
                      {ele.latest_data.confirmed}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
