import {tsparticles} from 'tsparticles-engine'
import {loadFull} from 'tsparticles';

import Particles from 'react-tsparticles';
import { createRef } from 'react';

const backgroundStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    backgroundImage: 'url("")',
    backgroundRepeat: 'no-repeat',
    backgroundStyle: 'cover',
    backgroundPosition: '50% 50%'
};

const particlesConfig = (props) => {
    const options = {
        background: {
            color: "red"
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 50,
                    duration: 50,
                    opacity: 0.8,
                    size: 500
                },
                push: {
                    quantity: 5
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: "blue"
            },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: false
            },
            move: {
                angle: {
                    offset: true,
                    value: 3000
                },
                direction: 'bottom-right',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 3,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 1300
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: ['triangle', 'polygon']
            },
            size: {
                random: true,
                value: 15
            }
        }
    };

    const initialize = async (instance) => {
        await loadFull(instance);
    };

    const ref = createRef();

    return <div style={{ zIndex: -1, position: 'fixed' }} ref={ref}>
        <Particles options={options} init={async (instance) => await initialize(instance)} container={ref} />
    </div>;
};

export default particlesConfig;