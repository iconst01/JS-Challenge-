function excercise(excerciseName) {
const days = ["Monday","Tuesday","Wednesday","Thursday", "Firday"];
    const today = new Date().getDay();// Get the index of the current day 

    return `Todays exercise for: ${days[today]}: ${excerciseName}`;
    }
  
    console.log(excercise("running"));
    console.log(excercise("swimming"));
    console.log(excercise("dancing"));
    console.log(excercise("fencing"));
