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
        message: "Welcome to the first scenario",
        response: [
            {
                option: "I want to do this option",
                goTo: 2
            },
            {
                option: "I'm brave and wanna pick this option",
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