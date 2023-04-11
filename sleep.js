const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 7;
      break;
    case "friday":
      return 9;
      break;
    case "saturday":
      return 2;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You've got more sleep than needed!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You got ${
        idealSleepHours - actualSleepHours
      } hour(s) less sleep that you needed this week.  Get some rest.`
    );
  } else {
    console.log("Error! Something went wrong. You should check your code.");
  }
};
calculateSleepDept();

//console.log(getActualSleepHours());
