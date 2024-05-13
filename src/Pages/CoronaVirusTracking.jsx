import React, { useEffect, useState } from "react";
import "../Assets/CoronaVirusTracking.css";
const CoronaVirusTracking = () => {
  const [input, setInput] = useState("India");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://disease.sh/v3/covid-19/countries/${input}`;
      const responce = await fetch(url);
      const resJson = await responce.json();
      setData(resJson);
    };
    fetchAPI();
  }, [input]);

  return (
    <>
      <section className="container">
        <div>
          <p className="main-title">Covid-19 Corono Virus Tracker</p>

          <p className="sub-title">Country Wise Data</p>

          <input
            type="search"
            className="input-box"
            placeholder="Search country here..."
            onChange={(event) => {
              setInput(event.target.value);
            }}
            value={input}
          />

          {data.message === "Country not found or doesn't have any cases" ||
          !input ? (
            <h1 className="not-found">City Not Found</h1>
          ) : (
            <>
              <div className="card-section">
                <div className="card-one">
                  <span className="data-title">
                    Active Cases In {input} <br />
                  </span>
                  {data.active}
                </div>
                <div className="card-two">
                  <span className="data-title">
                    Total Cases In {input}
                    <br />
                  </span>
                  {data.cases}
                </div>
                <div className="card-three">
                  <span className="data-title">
                    Deaths In {input} <br />
                  </span>
                  {data.deaths}
                </div>
                <div className="card-one">
                  <span className="data-title">
                    Recovered In <br />
                  </span>
                  {data.recovered}
                </div>
                <div className="card-two">
                  <span className="data-title">
                    Tests In {input} <br />
                  </span>
                  {data.tests}
                </div>
                <div className="card-three">
                  <span className="data-title">
                    Critical Cases In {input} <br />
                  </span>
                  {data.critical}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CoronaVirusTracking;
