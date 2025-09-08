# Astro Sim

## Overview
Hello! This website is an orbital mechanics simulator for the terrestrial planets of the solar system in an ideal scenario where orbits are not interrupted or changed by gravitational attraction to each other or the sun. It's meant to demonstrate how the variables mass (m) and distance (r) affect the gravitational force equation encountered in traditional high school physics courses, which acts as the main factor to the speed and direction of an object's orbit. This project took about 10 hours to finish, using three.js as the main library and built using React + Vite.

## Instructions
This website can be accessed using Vercel. Simply click on the deployment link found in the repository. When you enter the page, you are greeted with a simple astronomical simulation of the planets orbiting the sun. You can use the sliders to adjust the planets' and/or sun's mass, the distance of these planets from the sun, and the speed of the simulation. Pressing the "Run Simulation" button allows you to run the simulation with your selected settings, while "Reset to Defaults" button while restore the default simulation settings.

## Motivation
My main motivation for creating this project was to learn the three.js library for future projects in 3D rendering in the browser. I already have a good amount of experience with astronomical simulations, so I wanted to take those skills and apply the math I know to a new building tool. I also wanted to get a little more practice in react due to still being new to the library. Finally, I wanted to perfect my graphic design skills and create a pretty UI for the simulation.

## Challenges and Reflection
* The main challenge of this project was understanding all of the quirks of three.js, as well as how the library even works. This was my first time experimenting with a program in 3D, so I had a lot of both confusion and fun learning about how everything comes together.
* The unresolved challenge of this project was using three js's position attribute to update object position in two axes instead of simply relying on speed to update the rotation around the y axis. I could not find a way to get non-undefined values from calling the position of any of the planets, so I could not go onwards with my original goal of creating a solar system simulator with collisions and exits of orbit. Regardless, I'm still happy with the result, because I learned a lot about three js in general. I intend to try and recreate this simulation in the future using p5 js, a library which I have seen working position calls performed with before, and implement gravitational collisions with the force of gravity equation using this experience.


[![Athena Award Badge](https://img.shields.io/endpoint?url=https%3A%2F%2Faward.athena.hackclub.com%2Fapi%2Fbadge)](https://award.athena.hackclub.com?utm_source=readme)