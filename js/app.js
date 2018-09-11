// Javascript file that controls functionality and interactivity of index.html

// Begin web intereaction by asking for name
var visitorsName = prompt('What is your name?');
console.log(visitorsName + 'is the user\'s name');

// Question 1, plus feedback for correct and incorrect answers
var favNBAPlayerQ = 'Does Darrin think that Steph Curry is the best player in the NBA?';
var favNBAPlayerAlertIfCorrect = 'Got \'em! Yup, no one else can make it splash like Steph.';
var favNBAPLayerAlertIfWrong = 'Ah, sorry. It looks like you don\'t know Darrin as well as you thought';

// Question 2, plus feedback for correct and incorrect answers
var favFoodTypeQ = 'Does Darrin enjoy Filipino food more than any other?';
var favFoodTypeIfCorrect = 'You were right; although he has Filipino ancestry, his favorite'
                            + ' type of food is Japanese food';
var favFoodTypeIfWrong = 'Ah, bummer. Although Darrin is part Filipino, Filipino food'
                            + ' is not his number one.';

// Question 3, plus feedback for correct and incorrect answers
var favCityQ = 'Is Barcelona Darrin\'s favorite city?';


// Series of 5 questions + decision trees
// NBA question
var favNBAPlayer = prompt(favNBAPlayerQ);
if(favNBAPlayer.toLowerCase() === 'y' || favNBAPlayer.toLowerCase() === 'yes' ) {
  alert(favNBAPlayerAlertIfCorrect);
} else {
  alert(favNBAPLayerAlertIfWrong);
}

// Favorite food question
var favFood = prompt(favFoodTypeQ);
if(favFood.toLowerCase() === 'y' || favFood.toLowerCase() === 'Y') {
  alert(favFoodTypeIfCorrect);
} else {
  alert(favFoodTypeIfWrong);
}
