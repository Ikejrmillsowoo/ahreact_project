import React, { Component }from 'react';
import DisplayComponent from './DisplayComponent';
import News from './NewsComponent';






export default class Home extends Component {
    render() {
        return (
          <>
            <div className="container home-container">
              <div className="row">
                <div className="col-12">
                  <DisplayComponent />
                </div>
                <div className="col">
                  <News />
                </div>
              </div>
            </div>
          </>
        );

    }
}