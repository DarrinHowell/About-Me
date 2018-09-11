// Javascript file that controls functionality and interactivity of index.html

// Begin web intereaction by asking for name
var visitorsName = prompt('What is your name?');
console.log(visitorsName + 'is the user\'s name');

var favNBAPlayerQ = 'Does Darrin think that Steph Curry is the best player in the NBA?';
var favNBAPlayerAlertIfCorrect = 'Got \'em! Yup, no one else can make it splash like Curry.';
var favNBAPLayerAlertIfWrong = 'Ah, sorry. It looks like you don\'t know Darrin as well as you thought'; 

// Series of 5 questions + decision trees
var favNBAPlayer = prompt(favNBAPlayerQ);
if(favNBAPlayer.toLowerCase() === 'y' || favNBAPlayer.toLowerCase() === 'yes' ) {
    alert(favNBAPlayerAlertIfCorrect);
} else {
    alert(favNBAPLayerAlertIfWrong);
}
