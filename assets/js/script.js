// Assign variables to be able to target textbox and option button text

let scenarioText = document.getElementById('text-box');
let optionButtons = document.getElementById('buttons-container');

let oldWin = parseInt(document.getElementById('win').innerText);
let oldLoss = parseInt(document.getElementById('lose').innerText);

// let penguin = new Audio('penguins.mp3');


// Create funtion to start the game

function runGame() {
    // The intro message needs to display in text section
    // One option button needs to display with text "Take me to the zoo"
    displayText('intro')
};


// This function learned from "Web Dev Simplified" on youtube
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

// Check if option has an outcome, and respond accordingly
function optionResponse(respond) {

    if (respond.outcome == null) {
        displayText(respond.goTo);
    } else if (respond.outcome == "win") {
        addWin();
        populateStorage();
        displayText(respond.goTo);
        
    } else if (respond.outcome == "lose") {
        addLoss();
        populateStorage();
        displayText(respond.goTo);
    }
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
        message: `You get to the zoo and the queue to get in is really long. Do you:`,
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
        // audio: penguin,
        message: "You waited patiently in the queue for 30 minutes and your finally get it. First stop - the penguin feeding! While you're there the zookeeper is very preoccupied feeding the group. You see one to the side. He looks lonely. What do you do:",
        response: [
            {
                option: "Take the penguin while no one is looking.",
                goTo: 4
            },
            {
                option: "Give the penguin a quick pat for encouragement. He belongs with the other penguins.",
                goTo: 5
            }
        ],
    },
    {
        id: 3,
        message: "Huzzah! You found your way in! Maybe this life of crime suits you afterall. You swagger through the zoo when you come across the penguin feeding.The zookeeper is very preoccupied feeding the group. You see one to the side. He looks lonely. What do you do:",
        response: [
            {
                option: "Take the penguin while no one is looking.",
                goTo: 4
            },
            {
                option: "Give the penguin a quick pat for encouragement. He belongs with the other penguins.",
                goTo: 5
            }
        ],
    },
    {
        id: 4,
        message: "Uh oh! As you were putting the penguin into your bag he cried out. The zookeeper hears and catches you. The police have been called. your days of crime are over.",
        response: [
            {
                option: "Let's try that again..",
                outcome: 'lose',
                goTo: 'intro'
            },
        ],
    },
    {
        id: 5,
        message: "Feeling more confident, the penguin waddles over to the rest of the group to get some fish. You go little penguin! Feeling good about yourself you go to the next enclosure. There's a sea lion show and they need a volunteer...",
        response: [
            {
                option: "Pick me! Pick me!",
                goTo: 6
            },
            {
                option: "Better give one of these kids a chance to do it.",
                goTo: 7
            }
        ],
    },
    {
        id: 6,
        message: "You get chosen, but you get knocked into the water and cannot swim. The sea lions think you're playing a game. You swallow a lot of water before being pulled out. Off to the hosptial you go.",
        response: [
            {
                option: "I'm better now. Let's try again.",
                outcome: 'lose',
                goTo: 'intro'
            },
        ],
    },
    {
        id: 7,
        message: "A kid gets chosen as the volunteer and performs some cool tricks with the sea lions. Man that looks cool. That should have been you. Being the mature person you are, you move on to the next enclosure with minimal sulking. You arrive at the gorillas. A huge silverback is patrolling near where you are.",
        response: [
            {
                option: "Show that gorilla who's boss! Beat your chest at him.",
                goTo: 8
            },
            {
                option: "Watching gorillas is hungry work. Let's eat while we watch.",
                goTo: 9
            }
        ],
    },
    {
        id: 8,
        message: "Turns out beating your chest at a gorilla make him mad. Who knew huh? The gorilla charges at the glass, baing on it loudly. You get a fright and stumble backwards. You fall, hitting your head. Everything fades to black... ",
        response: [
            {
                option: "Lesson learned. Leave the gorrilas be. Let's try again.",
                outcome: 'lose',
                goTo: 'intro',
            },
        ],
    },
    {
        id: 9,
        message: "As you take your first bite you feel a hand on your shoulder. They warn you against eating in front of the gorillas. You decide to follow this persons advice, and you and your new friend wander over to the snapping turtle enclosure. They dare you to touch one: ",
        response: [
            {
                option: "No way! That seems like a bad idea.",
                goTo: 10,
            },
            {
                option: "You're not one to shy away from a challenge. Let's pet that weirdly adorable little head.",
                goTo: 11,
            }
        ],
    },
    {
        id: 10,
        message: "Your friend thinks you're lame now. They leave. Feeling sad you go to the cafe to get some ice cream. All they have is pistachio but you have a severe nut allergy. Do you risk it?",
        response: [
            {
                option: "Pass! Not worth the risk. I'll go find some pandas instead.",
                goTo: 12,
            },
            {
                option: "No pain no gain! I want ice cream!",
                goTo: 13,
            }
        ],
    },
    {
        id: 11,
        message: "Turns out they're called snapping turtles for a reason! You reach out to touch them, but they smell the food on your hands and snap at you, grabbing your hand. They swarm and all snap at you. You escape with your life. But not your hand.",
        response: [
            {
                option: "I want my hand back! Let's restart.",
                outcome: 'lose',
                goTo: 'intro',
            },
        ],
    },
    {
        id: 12,
        message: "There's something very relaxing about the pandas. So chill. Much noms. They're almost hypnotic....",
        response: [
            {
                option: "Better go get some coffee to snap out of this.",
                goTo: 14,
            },
            {
                option: "This is so relaxing... One more.. minute... zZzZzZ",
                goTo: 15,
            }
        ],
    },
    {
        id: 13,
        message: "Well that was foolish. You had an allergic reaction and got rushed to hospital. What else did you expect?!",
        response: [
            {
                option: "Let's pretend that didn't happen",
                outcome: "lose",
                goTo: 'intro',
            }
        ],
    },
    {
        id: 14,
        message: "You get your coffee and use this new found energy to visit the rest of the animals. Feeling confident from the caffeine boost you ask to hold the tarantula after she was fed.",
        response: [
            {
                option: "You purposely make her angry while you hold her. You want to be bitten to become the next Spiderman.",
                goTo: 16,
            },
            {
                option: "You stay absolutly still, watching with fascination while she crawls around you.",
                goTo: 17,
            }
        ],
    },
    {
        id: 16,
        message: "The good news is you succeeded in making her mad and she bit you. The bad news is you did not get superpowers or spidey senses, and the reptile keeper just kicked you out.",
        response: [
            {
                option: "One day a spiderbite will give you powers. Until then, back to the start you go.",
                outcome: "lose",
                goTo: 'intro',
            }
        ],
    },
    {
        id: 17,
        message: "You stay and chat to the keeper for a while. They're super impressed by how confident you were holding their favourite tarantula. They end up giving you a lifetime pass to the zoo, to come visit anytime you like!",
        response: [
            {
                option: "You completed your day at the zoo in one piece! Think you can find the other ways too?",
                outcome: 'win',
                goTo: 'intro',
            }
        ],
    },
    {
        id: 15,
        message: "You wake up and no one is around you. It's dark. The only sounds you hear are the soft crunches and rustling coming from the pandas eating bamboo. This is a childhood dream come true! Where to first?",
        response: [
            {
                option: "The red pandas! They're so fluffy. I've always wanted to cuddle one.",
                goTo: 18,
            },
            {
                option: "Meerkat time! I've loved them since before the ad came out.",
                goTo: 19,
            },
            {
                option: "To the wolves! They're nocturnal, right?!",
                goTo: 20,
            }
        ],
    },
    {
        id: 18,
        message: "Fluffy, but deadly. These little guys are mightly aggressive, despite the adorable exterior. Bet you wish you watched a documentary to learn about those sharp claws and strong jaws before trying that.",
        response: [
            {
                option: "I'll know better next time.",
                outcome: "lose",
                goTo: 'intro',
            }
        ],
    },
    {
        id: 19,
        message: "Your lifelong obsession taught you lots of meerkat puns, you were ready to work on those tv ads with Serge. You also learned the calls of the babies. Congratulations, your hard work paid off and they have accepted you as their new oversized baby. Today marks the first day of your new life as a meerkat.",
        response: [
            {
                option: "I'm happy with my new meerkat life, but let's see what else we can do.",
                outcome: 'win',
                goTo: 'intro',
            }
        ],
    },
    {
        id: 20,
        message: "The wolves are loud as you approach. They're on the hunt. You see a rabbit dodging and weaving in the enclosure. How did that get there? Silly rabbit",
        response: [
            {
                option: "Howl like a wolf. That'll distract them",
                goTo: 21,
            },
            {
                option: "Watch nature take its course. Survival of the fittest and all that.",
                goTo: 22,
            }
        ],
    },
    {
        id: 21,
        message: "Your howling does in fact distract the wolves. They join in the howl. This alerts the security that somehow didn't know you were there. They find you and ban you from the zoo.",
        response: [
            {
                option: "Start again, knowing you saved the rabbit from certain doom.",
                outcome: 'lose',
                goTo: 'intro',
            }
        ],
    },
    {
        id: 22,
        message: "You watch an unbelievable game of cat and mouse, the rabbit dodging and weaving between the wolves. Miraculously the rabbit escapes!",
        response: [
            {
                option: "Quick, lets follow it!",
                goTo: 23,
            },
            {
                option: "Leave it be. The lion enclosure is nearby anyway.",
                goTo: 24,
            }
        ],
    },
    {
        id: 23,
        message: "You chase after the rabbit. You think you hear a voice. Could it be... the rabbit? Nah, it's probably the security guard finally noticing you.",
        response: [
            {
                option: "Keep following the rabbit.",
                goTo: 25,
            },
            {
                option: "Hide.",
                goTo: 26,
            }
        ],
    },
    {
        id: 24,
        message: "You get to the lions and they're all snoozing. A bit disappointing really.",
        response: [
            {
                option: "Leave them be.",
                goTo: 27,
            },
            {
                option: "Sing them the call of their people - 'In the Jungle'.",
                goTo: 28,
            }
        ],
    },
    {
        id: 25,
        message: "You follow the rabbit for what seems like an age. Your head feels funny. The voice grows louder but you lose sight of the rabbit. You trip and fall, but it feels like you just keep on falling. You finally stop and pick yourself up. You're in... Wonderland?!",
        response: [
            {
                option: "I don't know what's real anymore. Bring me back to my zoo!",
                outcome: 'win',
                goTo: 'intro',
            }
        ],
    },
    {
        id: 26,
        message: "You find a hiding spot. The voice disappears. No sign of security either. You realise it was either the rabbit or you're losing your mind. You realise you don't have one without the other... ",
        response: [
            {
                option: "Let's find a way home.",
                goTo: 29,
            },
            {
                option: "I give up on reality. I'm moving in with the meerkats.",
                goTo: 19,
            }
        ],
    },
    {
        id: 27,
        message: "Most of the animals are snoozing. Well, it is nighttime after all! You decide you should be snoozing too. You find a cosy enclosure and fall asleep.",
        response: [
            {
                option: "Feels a bit anti-climactic. I must find the other ways out! Back we go.",
                outcome: 'lose',
                goTo: 'intro',
            },
        ],
    },
    {
        id: 28,
        message: "Oh no. Not this song again! The lions wake up in a rage. They listen to this song day in, and day out. They're not in a mighty jungle. And now they're not even sleeping. They've had enough. They manage to escape and all that can be heard is your melodic scream - 'Ee-e-e-oh-mum-a-weh' ",
        response: [
            {
                option: "Oh dear. I'll refrain from singing next time.",
                outcome: 'lose',
                goTo: 'intro',
            }
        ],
    },
    {
        id: 29,
        message: "Well done! You made it to the end! Now to find a way out. Think you can manage?",
        response: [
            {
                option: "I could, but this is GroundHog day so I won't",
                outcome: 'win',
                goTo: 'intro',
            },
        ],
    },
];

runGame();

// let myScore = document.getElementById('win').innerHTML;

// function findScores(key)
// {
//    console.log('LocalStorage: ' + key + ' has a value of: ' + value);
//    return localStorage.getItem(key)
// }

// function storeScores (key, value) {
//     localStorage.setItem(key, value);
//     console.log('You saved ' + key + " as " + value)
// };

// storeScores('ted', '20');

function populateStorage() {
    localStorage.setItem('wins', document.getElementById('win').innerText);
    localStorage.setItem('losses', document.getElementById('lose').innerText);
};



