import React from "react";
import "./App.css";
import Planet from "./components/planet/planet";
import { useState } from "react";

export default function App() {
    const [planetSound, setPlanetSound] = useState();

    return (
        <div className="app">
            <h1>Solar System Sounds</h1>
            <div className="planetContainer">
                <Planet
                    planetName="sun"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="mercury"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="venus"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="mars"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="earth"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="jupiter"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="saturn"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="uranus"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
                <Planet
                    planetName="neptune"
                    planetSound={planetSound}
                    setPlanetSound={setPlanetSound}
                />
            </div>
        </div>
    );
}
