document.addEventListener("DOMContentLoaded", function() {
    let myWins = localStorage.getItem('wins');
    let myLosses = localStorage.getItem('losses');

    document.getElementById('last-win').innerText = myWins;
    document.getElementById('last-lose').innerText = myLosses;
});
