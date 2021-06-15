// Assign variables to be able to target textbox and option button text

let scenarioText = document.getElementById('text-box');
let optionButtons = document.getElementById('buttons-container');

let oldWin = parseInt(document.getElementById('win').innerText);
let oldLoss = parseInt(document.getElementById('lose').innerText);

// Create funtion to start the game

function runGame() {
    // The intro message needs to display in text section
    // One option button needs to display with text "Take me to the zoo"
    displayText('intro')
};

function incrementScore() {
    if (scenarios.outcome = "win") {
        addWin();
    } else if (scenarios.outcome = "lose") {
        addLoss();
    } 
}
   
// }

// function learned from "Web Dev Simplified" on youtube
// https://www.youtube.com/watch?v=R1S_NhKkvGA

function displayText (scenarioIndex) {
    // This finds the desired scenario needed by ID
        let scenario = scenarios.find(scenario => scenario.id === scenarioIndex)
    // This changes the text displaying in the text box to the text within the newly targeted scenario
        scenarioText.textContent = scenario.message
    // This removes an option button as long as our element optionButtons has a first child
        while (optionButtons.firstChild) {
            optionButtons.removeChild(optionButtons.firstChild)
        }

    // The option buttons need to be added back in with the desired text from each scenario using a loop
    // We access each response in a scenario and apply the forEach method to apply a new function (respond) to each item in the array
        scenario.response.forEach(respond => {
            // Create the button
            let optionButton = document.createElement('button')
            // Change the text content of the button to the text of the new option
            optionButton.textContent = respond.option
            // Add the class to allow css to stlye it properly
            optionButton.classList.add('btn')
            // Add an event listener so when an option button is clicked the right buttons are created
            optionButton.addEventListener('click', () => optionResponse(respond))
            // Add the new option button back to the buttons-container div
            optionButtons.appendChild(optionButton)
        })
    };

function optionResponse(respond) {
    // This function implements response based on the option you choose
    displayText(respond.goTo)
};


function addWin() {
    // A function to increase number of times user made it to the end
    document.getElementById('win').innerText = ++oldWin;
}

function addLoss() {
    // A function to increase the number of times user lost and had to start again
    document.getElementById('lose').innerText = ++oldLoss;
}

// Create an array to hold all of the scenarios as objects containing the body text and option text

let scenarios = [
    {
        id: 'intro',
        message: "Picture this. It's a beautiful sunny day. You have no plans or responsibilities. Life is good. You decide to go to the zoo. What could go wrong?", 
        response: [
            {
                option: "Take me to the zoo!",
                goTo: 1
            },
        ],
    },
    {
        id: 1,
        message: `You get to the zoo and the queue to get in is really long. <br> Do you:`,
        response: [
            {
                option: "Wait in line",
                goTo: 2
            },
            {
                option: "Queues are for nerds. Lets sneak in.",
                goTo: 3
            },
        ],
    },
    {
        id: 2,
        message: "Welcome to the your end",
        response: [
            {
                option: "I need to start again",
                outcome: "lose",
                goTo: 'intro'
            },
        ],
    },
    {
        id: 'final',
        message: "congratulations, you survived your day at the zoo!",
        response: [
            {
                option: "Let's play again",
                outcome: "win",
                goTo: "intro"
            },
        ],
    },
];

runGame();

