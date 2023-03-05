import { createContext, useState } from "react";

const MenuContext = createContext({
  menuItems: [],
  currentCount: 0,
  incrementCount: () => {},
});

export function MenuContextProvider(props) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

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

console.log(menuItemsList);

  const context = {
    menuItems: menuItemsList,
    currentCount: counter,
    incrementCount: incrementCounter,
  };

  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
