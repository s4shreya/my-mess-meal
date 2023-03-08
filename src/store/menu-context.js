import { createContext, useState } from "react";

const MenuContext = createContext({
  menuItems: [],
  currentCount: 0,
  mealName: "",
  timings: "",
  menu: "",
  calories: 0,
  meal: 0,
  day: 0,
  totalCalories: 0,
  message: ["", "", ""],
  mealEaten: [true, true, true],
  incrementCount: () => {},
  findMeal: (count) => {},
  addCalories: (cal) => {},
  updateTotalCalories: (day) => {},
  setMessage: (msg, mealIndex) => {},
  checkMealStatus: (cal, mealIndex) => {},
  changeCounter: (days) => {},
});

export function MenuContextProvider(props) {
  const [counter, setCounter] = useState(0);
  const [caloriesSum, setCaloriesSum] = useState(0);
  const [msg, setMsg] = useState(["", "", ""]);
  const [isMealEaten, setIsMealEaten] = useState([true, true, true]);

  const incrementCounter = () => setCounter(counter + 1);

  const addCalories = (cal) => {
    setCaloriesSum(caloriesSum + cal);
  };

  const updateTotalCalories = (cal) => {
    setCaloriesSum(cal);
  };

  const setMessage = (message, mealIndex) =>
    setMsg(
      msg.map((value, index) => {
        if (mealIndex === index) {
          return message;
        } else {
          return value;
        }
      })
    );

  const mealStatus = (cal, mealIndex) => {
    setIsMealEaten(
      isMealEaten.map((value, index) => {
        if (mealIndex === index) {
          if (cal === 0) {
            return false;
          } else {
            return true;
          }
        } else {
          return value;
        }
      })
    );
  };

  const updateCounter = (days) => setCounter(counter + days);

  const menuItemsList = [[], [], []];
  menuItemsList[0] = [
    { name: "Idli Sambhar", calories: 238 },
    { name: "Pav Bhaji", calories: 320 },
    { name: "Paneer Paratha", calories: 400 },
    { name: "Uttapam Sambhar", calories: 395 },
    { name: "Vegetable Sandwich", calories: 460 },
    { name: "Poha", calories: 255 },
    { name: "Upma", calories: 327 },
  ];

  menuItemsList[1] = [
    { name: "Paneer Bhurji, chapati, rice", calories: 550 },
    { name: "Rajma, chapati, rice", calories: 825 },
    { name: "Bhindi, chapati, rice", calories: 656 },
    { name: "Aloo gobhi, chapati, rice", calories: 574 },
    { name: "Lauki, chapati, rice", calories: 650 },
    { name: "Chole, chapati, rice", calories: 787 },
    { name: "Palak Paneer, chapati, rice", calories: 871 },
  ];

  menuItemsList[2] = [
    { name: "Kadhi, chapati, rice", calories: 497 },
    { name: "Dal Fry, chapati, rice", calories: 578 },
    { name: "Malai kofte, chapati, rice", calories: 449 },
    { name: "Patta gobhi, chapati, rice", calories: 368 },
    { name: "Dal palak, chapati, rice", calories: 542 },
    { name: "Kadhai Paneer, chapati, rice", calories: 455 },
    { name: "Aloo tamatar, chapati, rice", calories: 411 },
  ];

  const findMeal = (count) => {
    let meal = count % 3;
    let day = Math.trunc(count / 3);
    let mealName, timings, menu, calories;

    if (meal === 0) {
      mealName = "Breakfast";
      timings = "8:00 AM to 9:00 AM";
      menu = menuItemsList[meal][day].name;
      calories = menuItemsList[meal][day].calories;
    } else if (meal === 1) {
      mealName = "Lunch";
      timings = "1:00 PM to 2:00 PM";
      menu = menuItemsList[meal][day].name;
      calories = menuItemsList[meal][day].calories;
    } else {
      mealName = "Dinner";
      timings = "8:00 PM to 9:00 PM";
      menu = menuItemsList[meal][day].name;
      calories = menuItemsList[meal][day].calories;
    }

    return [mealName, timings, menu, calories, meal, day];
  };

  const context = {
    menuItems: menuItemsList,
    currentCount: counter,
    mealName: findMeal(counter)[0],
    timings: findMeal(counter)[1],
    menu: findMeal(counter)[2],
    calories: findMeal(counter)[3],
    meal: findMeal(counter)[4],
    day: findMeal(counter)[5],
    totalCalories: caloriesSum,
    message: msg,
    mealEaten: isMealEaten,
    incrementCount: incrementCounter,
    findMeal: findMeal,
    addCalories: addCalories,
    updateTotalCalories: updateTotalCalories,
    setMessage: setMessage,
    checkMealStatus: mealStatus,
    changeCounter: updateCounter,
  };

  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
