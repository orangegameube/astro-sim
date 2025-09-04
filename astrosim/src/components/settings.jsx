import { useEffect } from 'react';

import '../components/settings.css'

export const Settings = () => {

    useEffect(() => {
        var slider = document.getElementById("sunMRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
        output.innerHTML = this.value;
}
    })

    return (
        <div id='settingsMenu'>
            <div>
                <p class='sethead'>Change Mass</p>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="sunMRange" />
                    <p>Value: <span id="demo"></span></p>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="mercMRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="venMRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="earthMRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="marsMRange" />
                </div>
            </div>

            <div>
                <p class='sethead'>Change Speed</p>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="sunSRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="mercSRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="venSRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="earthSRange" />
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" value="50" class="slider" id="marsSRange" />
                </div>
            </div>
        </div>
    )

}