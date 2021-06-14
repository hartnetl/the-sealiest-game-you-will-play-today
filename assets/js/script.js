// Assign variables to be able to target textbox and option button text

let scenarioText = document.getElementById('text-box');
let optionButtons = document.getElementById('buttons-container');

// Create funtion to start the game




function runGame() {
    // The intro message needs to display in text section
    // One option button needs to display with text "Take me to the zoo"
    scenarioText.textContent = scenarios[0].message;
};

function displayScenarioX() {
    // This function needs to control what scenario to display
    // And the associated options
    if (scenarios[0].id ==="intro") {
        scenarioText = scenarios[0].message;
    }
};

function optionResponse() {
    // This function implements response based on the option you choose
    console.log("you picked option X and so the following things must happen")
};

// function displayText () {
//     scenarioText.textContent = this.message;
// }

// displayText(scenarios[0]);

// Create an array to hold all of the scenarios as objects

let scenarios = [
    {
        id: "intro",
        message: "This is the introduction message", 
        response: [
            {option1: "Take me to the zoo!"},
        ],
    },
    {
        id: "1",
        message: "Welcome to the first scenario",
        response: [
            {option1: "I want to do this option"},
            {option2: "I'm brave and wanna pick this option"},
        ],
    },
];

runGame();