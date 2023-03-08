import { useContext } from "react";

import styles from "./MenuItemsList.module.css";
import MenuContext from "../../store/menu-context";

function MenuItemsList() {
  const menuCtxt = useContext(MenuContext);

  return (
    <div>
      <table className={styles.menuTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th rowSpan={2} className={styles.main}>
              Meals and Timings <br />
              Days
            </th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
          <tr>
            <td>8:00 AM to 9:00 AM</td>
            <td>1:00 PM to 2:00 PM</td>
            <td>8:00 PM to 9:00 PM</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr>
            <th rowSpan={2}>Monday</th>
            <td>{menuCtxt.menuItems[0][0].name}</td>
            <td>{menuCtxt.menuItems[1][0].name}</td>
            <td>{menuCtxt.menuItems[2][0].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][0].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][0].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][0].calories}</td>
          </tr>
          <tr>
            <th rowSpan={2}>Tuesday</th>
            <td>{menuCtxt.menuItems[0][1].name}</td>
            <td>{menuCtxt.menuItems[1][1].name}</td>
            <td>{menuCtxt.menuItems[2][1].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][1].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][1].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][1].calories}</td>
          </tr>
          <tr>
            <th rowSpan={2}>Wednesday</th>
            <td>{menuCtxt.menuItems[0][2].name}</td>
            <td>{menuCtxt.menuItems[1][2].name}</td>
            <td>{menuCtxt.menuItems[2][2].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][2].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][2].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][2].calories}</td>
          </tr>
          <tr>
            <th rowSpan={2}>Thursday</th>
            <td>{menuCtxt.menuItems[0][3].name}</td>
            <td>{menuCtxt.menuItems[1][3].name}</td>
            <td>{menuCtxt.menuItems[2][3].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][3].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][3].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][3].calories}</td>
          </tr>
          <tr>
            <th rowSpan={2}>Friday</th>
            <td>{menuCtxt.menuItems[0][4].name}</td>
            <td>{menuCtxt.menuItems[1][4].name}</td>
            <td>{menuCtxt.menuItems[2][4].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][4].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][4].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][4].calories}</td>
          </tr>
          <tr>
            <th rowSpan={2}>Saturday</th>
            <td>{menuCtxt.menuItems[0][5].name}</td>
            <td>{menuCtxt.menuItems[1][5].name}</td>
            <td>{menuCtxt.menuItems[2][5].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][5].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][5].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][5].calories}</td>
          </tr>
          <tr>
            <th rowSpan={2}>Sunday</th>
            <td>{menuCtxt.menuItems[0][6].name}</td>
            <td>{menuCtxt.menuItems[1][6].name}</td>
            <td>{menuCtxt.menuItems[2][6].name}</td>
          </tr>
          <tr>
            <td>Calories: {menuCtxt.menuItems[0][6].calories}</td>
            <td>Calories: {menuCtxt.menuItems[1][6].calories}</td>
            <td>Calories: {menuCtxt.menuItems[2][6].calories}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuItemsList;
