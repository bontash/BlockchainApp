import React from "react";
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

export class ParticlesBackground extends React.PureComponent {
    // this customizes the component tsParticles installation
    async customInit(engine) {
        // this adds the preset to tsParticles, you can safely use the
        await loadFireflyPreset(engine);
    }

    render() {
        const options = {
            preset: "firefly",
            background: {
                color:"#125B50"
            }
        };

        return <Particles options={options} init={this.customInit} />;
    }
}