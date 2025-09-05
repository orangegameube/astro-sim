import { useEffect } from 'react';

import '../components/settings.css'

export const Settings = () => {

    useEffect(() => {
        var inoutList = [['sunMRange', 'sunMOut'], ['mercMRange', 'mercMOut'], ['venMRange', 'venMOut'], ['earthMRange', 'earthMOut'], ['marsMRange', 'marsMOut'], ['sunSRange', 'sunSOut'], ['mercSRange', 'mercSOut'], ['venSRange', 'venSOut'], ['earthSRange', 'earthSOut'], ['marsSRange', 'marsSOut']];
        var sliderM1 = document.getElementById(inoutList[0][0]);
        var outputM1 = document.getElementById(inoutList[0][1]);
        outputM1.innerHTML = sliderM1.value; // Display the default slider value
        var sliderM2 = document.getElementById(inoutList[1][0]);
        var outputM2 = document.getElementById(inoutList[1][1]);
        outputM2.innerHTML = sliderM2.value; // Display the default slider value
        var sliderM3 = document.getElementById(inoutList[2][0]);
        var outputM3 = document.getElementById(inoutList[2][1]);
        outputM3.innerHTML = sliderM3.value; // Display the default slider value
        var sliderM4 = document.getElementById(inoutList[3][0]);
        var outputM4 = document.getElementById(inoutList[3][1]);
        outputM4.innerHTML = sliderM4.value; // Display the default slider value
        var sliderM5 = document.getElementById(inoutList[4][0]);
        var outputM5 = document.getElementById(inoutList[4][1]);
        outputM5.innerHTML = sliderM5.value; // Display the default slider value

        var sliderS1 = document.getElementById(inoutList[5][0]);
        var outputS1 = document.getElementById(inoutList[5][1]);
        outputS1.innerHTML = sliderS1.value; // Display the default slider value
        var sliderS2 = document.getElementById(inoutList[6][0]);
        var outputS2 = document.getElementById(inoutList[6][1]);
        outputS2.innerHTML = sliderS2.value; // Display the default slider value
        var sliderS3 = document.getElementById(inoutList[7][0]);
        var outputS3 = document.getElementById(inoutList[7][1]);
        outputS3.innerHTML = sliderS3.value; // Display the default slider value
        var sliderS4 = document.getElementById(inoutList[8][0]);
        var outputS4 = document.getElementById(inoutList[8][1]);
        outputS4.innerHTML = sliderS4.value; // Display the default slider value
        var sliderS5 = document.getElementById(inoutList[9][0]);
        var outputS5 = document.getElementById(inoutList[9][1]);
        outputS5.innerHTML = sliderS5.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        sliderM1.oninput = function() {
            outputM1.innerHTML = this.value;
        }
        sliderM2.oninput = function() {
            outputM2.innerHTML = this.value;
        }
        sliderM3.oninput = function() {
            outputM3.innerHTML = this.value;
        }
        sliderM4.oninput = function() {
            outputM4.innerHTML = this.value;
        }
        sliderM4.oninput = function() {
            outputM4.innerHTML = this.value;
        }
        sliderM5.oninput = function() {
            outputM5.innerHTML = this.value;
        }

        sliderS1.oninput = function() {
            outputS1.innerHTML = this.value;
        }
        sliderS2.oninput = function() {
            outputS2.innerHTML = this.value;
        }
        sliderS3.oninput = function() {
            outputS3.innerHTML = this.value;
        }
        sliderS4.oninput = function() {
            outputS4.innerHTML = this.value;
        }
        sliderS5.oninput = function() {
            outputS5.innerHTML = this.value;
        }

        var resetButton = document.getElementById('resetdefaults');
        resetButton.onclick = function() {
            sliderM1.value = 1;
            sliderM2.value = 1;
            sliderM3.value = 1;
            sliderM4.value = 1;
            sliderM5.value = 1;
            sliderS1.value = 1;
            sliderS2.value = 1;
            sliderS3.value = 1;
            sliderS4.value = 1;
            sliderS5.value = 1;
            outputM1.innerHTML = sliderM1.value;
            outputM2.innerHTML = sliderM2.value;
            outputM3.innerHTML = sliderM3.value;
            outputM4.innerHTML = sliderM4.value;
            outputM5.innerHTML = sliderM5.value;
            outputS1.innerHTML = sliderS1.value;
            outputS2.innerHTML = sliderS2.value;
            outputS3.innerHTML = sliderS3.value;
            outputS4.innerHTML = sliderS4.value;
            outputS5.innerHTML = sliderS5.value;
        }
    })

    return (
        <div id='settingsMenu'>
            <div>
                <p class='sethead'>Change Mass</p>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" defaultValue="1" class="slider mass" id="sunMRange" />
                    <label>Sun: x<span id="sunMOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" defaultValue="1" class="slider mass" id="mercMRange" />
                    <label>Mercury: x<span id="mercMOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" defaultValue="1" class="slider mass" id="venMRange" />
                    <label>Venus: x<span id="venMOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" defaultValue="1" class="slider mass" id="earthMRange" />
                    <label>Earth: x<span id="earthMOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="0.01" max="100" defaultValue="1" class="slider mass" id="marsMRange" />
                    <label>Mars: x<span id="marsMOut"></span></label>
                </div>
            </div>

            <div>
                <p class='sethead'>Change Speed</p>
                <div class="slidecontainer">
                    <input type="range" min="-100" max="100" defaultValue="1" class="slider speed" id="sunSRange" />
                    <label>Sun: x<span id="sunSOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="-100" max="100" defaultValue="1" class="slider speed" id="mercSRange" />
                    <label>Mercury: x<span id="mercSOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="-100" max="100" defaultValue="1" class="slider speed" id="venSRange" />
                    <label>Venus: x<span id="venSOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="-100" max="100" defaultValue="1" class="slider speed" id="earthSRange" />
                    <label>Earth: x<span id="earthSOut"></span></label>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="-100" max="100" defaultValue="1" class="slider speed" id="marsSRange" />
                    <label>Mars: x<span id="marsSOut"></span></label>
                </div>
            </div>
            <div>
                <button class='simbutton' id='runsim'>Run Simulation</button>
                <button class='simbutton' id='resetdefaults'>Reset to Defaults</button>
            </div>
        </div>
    )

}