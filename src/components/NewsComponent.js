import React from 'react';


export default function News() {
    return (
      <>
        <div className="container mt-5">
          <h1>News </h1>
          <h3>Current health resources</h3>
          <div className="row mx-auto newsRow">
            <div className="col-md">
              <iframe
                src="https://www.health.gov/myhealthfinder?badge=true"
                name="myhealthfinderframe"
                frameborder="0"
                id="myhealthfinderframe"
                scrolling="yes"
                height="250"
                width="178"
                marginheight="0"
                title="myhealthfinder widget"
                marginwidth="0"
              >
                <p>Your browser does not support iframes.</p>
              </iframe>
            </div>
            <div className="col">
              <iframe
                title="Male-Health"
                border="none"
                style={{ height: 300, border: 0, width: 260 }}
                scrolling="no"
                src="https://oig.hhs.gov/newsroom/widgets/2020/covid-wp.html"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col newsRow">
              <iframe
                title="Covid-19"
                border="none"
                src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map"
                width="100%"
                height="400px"
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
}