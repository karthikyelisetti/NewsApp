import React from "react";
import hockeyImage from "./blogHockey.jpg";
import indiachina from "./indiachina.jpg";
import century from "./gillcentury.webp";

export default function Blogdetails() {
  return (
    <div>
      <main class="container">
        <div class="col d-flex p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div class="col-md-6 px-0">
            <h3 class="display-4 fst-italic">
              Subhman Gill Scores Third IPL Century of Season
            </h3>
            <p class="lead my-3">
              Shubman Gill scored his third IPL century in the match between the
              Gujrat Titans and Mumbai Indians. Gill played a knock of 129 in 60
              balls to help GT put up a massive score of 200. Gill is the third
              player in the IPL history to score three or more centuries in a
              season.
            </p>
          </div>
          <div className="col-md-6">
            <img src={century} alt="Gill Century" style={{ width: "600px" }} />
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">Hockey</strong>
                <h5 class="mb-0">
                  FIH Pro League Hockey | India concede late goal to lose 1-2 to
                  Belgium
                </h5>
                <div class="mb-1 text-body-secondary">Mar 26, 2023</div>
                <p class="card-text mb-auto">
                  All the goals in the match came through penalty corners.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src={hockeyImage}
                  alt="Hockey"
                  style={{ width: "300px", height: "251px" }}
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">
                  Political
                </strong>
                <h5 class="mb-0">
                  Bhutan-China boundary expert group talks pick up speed,
                  officials hold second meeting this year
                </h5>
                <div class="mb-1 text-body-secondary">Nov 11</div>
                <p class="mb-auto">
                  EGM discusses progress in '3-step roadmap'.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src={indiachina}
                  alt="India China talks"
                  style={{ width: "240px", height: "250px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
