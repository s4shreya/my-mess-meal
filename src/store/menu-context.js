import { createContext, useState } from "react";

const MenuContext = createContext({
  menuItems: [],
  currentCount: 0,
  mealName: "",
  timings: "",
  menu: "",
  calories: 0,
  totalCalories: 0,
  incrementCount: () => {},
  addCalories: cal => {}
});

export function MenuContextProvider(props) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter+1);

  const menuItemsList = [[], [], []];
  menuItemsList[0] = [
    { name: "Idli Sambhar", calories: 138 },
    { name: "Pav Bhaji", calories: 120 },
    { name: "Paneer Paratha", calories: 200 },
    { name: "Uttapam Sambhar", calories: 195 },
    { name: "Vegetable Sandwich", calories: 100 },
    { name: "Poha", calories: 155 },
    { name: "Upma", calories: 127 },
  ];

  menuItemsList[1] = [
    { name: "Paneer Bhurji, chapati, rice", calories: 450 },
    { name: "Rajma, chapati, rice", calories: 625 },
    { name: "Bhindi, chapati, rice", calories: 456 },
    { name: "Aloo gobhi, chapati, rice", calories: 374 },
    { name: "Lauki, chapati, rice", calories: 350 },
    { name: "Chole, chapati, rice", calories: 587 },
    { name: "Palak Paneer, chapati, rice", calories: 471 },
  ];

  menuItemsList[2] = [
    { name: "Kadhi, chapati, rice", calories: 397 },
    { name: "Dal Fry, chapati, rice", calories: 278 },
    { name: "Malai kofte, chapati, rice", calories: 349 },
    { name: "Patta gobhi, chapati, rice", calories: 268 },
    { name: "Dal palak, chapati, rice", calories: 342 },
    { name: "Kadhai Paneer, chapati, rice", calories: 455 },
    { name: "Aloo tamatar, chapati, rice", calories: 211 },
  ];

  let meal = counter % 3;
  let day = Math.trunc(counter / 3);
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

  const context = {
    menuItems: menuItemsList,
    currentCount: counter,
    mealName: mealName,
    timings: timings,
    menu: menu,
    calories: calories,
    incrementCount: incrementCounter,
  };

  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
