import React, { Component } from 'react';
import {PROFILES} from '../shared/Profile';



export default class Profiles extends Component {
    constructor(props){
        super(props);

        this.state = {
            profiles: PROFILES
        }

     
    };

 

    render() {
        const profileItems = this.state.profiles.map((profile) => {
            return (
              <div className="container">
                <div className="row m-3">
                  <div className="col" key={profile.id}>
                    <img
                      src={profile.src}
                      alt={profile.altImage}
                      className="img-fluid img-thumbnail"
                    />
                  </div>
                    <div
                      className="col-md-6 "
                      id="profile-info"
                    >
                      <h3>{profile.name}</h3>
                      <p>{profile.description}</p>
                    </div>
                 
                </div>
              </div>
            );
        });


        return (
          <>
            <div class="container about-container">
              <h2>About Us:</h2>
              <div class="row">
                <div class="col-12 mt-2">
                  <h3>Our Mission</h3>
                  <p>
                    <span>A</span>ccess Health is a team of healthcare providers
                    who have seen the need to create access to health
                    information to people in our communities. We are made up of
                    Nurses, therapist and counselors who are specialized in
                    various aspects of healthcare and are willing to help anyone
                    with needs and requests. <br />
                  </p>
                </div>
                <div class="col-12 mt-2">
                  <h3>So how does Access Health work?</h3>
                  <p>
                    <span>W</span>e provide a platform for our users to ask
                    health related questions and any one of our team members
                    will respond with an answer, direction and or advice. The
                    answers to the questions are dependent on the situation and
                    state of the user. <br />
                  </p>
                </div>
                <div class="col">
                  <h3>Important Note:</h3>
                  <p>
                    <span>A</span>ccess Health does is not a replacement for
                    emergency rooms and situations and in any case where our
                    team thinks further medical aid is needed, it is our
                    responsibility to direct you. Although our recomendations
                    are based on experience and industry knowledge, we provide
                    advice and remedies that are over the counter and do not
                    require a prescription to obtain.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {profileItems}
                    </div>
                </div>
            </div>
          </>
        );
    }

}

