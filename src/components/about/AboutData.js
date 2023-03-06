import styles from "./AboutData.module.css";

function AboutData() {
  return (
    <section className={styles.details}>
      <div className={styles.row}>
        <h4 className={`${styles.subheading} ${styles.col1}`}>About us</h4>
        <p className={`${styles.content} ${styles.col2}`}>
          My Mess Meal helps to track the number of students who are going to
          have a meal. It provides a platform to the managers dealing with the
          management and operations of meal providing facilities such as mess,
          hostels, private hostels, PGs, old age homes, office canteens and
          other facilities that include providing food to people. With the help
          of My Mess Meal, the total food left can be calculated and
          simultaneously nearby orphanages, old age homes and NGOs are contacted
          with the details of available food. They can submit their response and
          avail food based on their choice.
        </p>
      </div>
      <div className={styles.row}>
        <h4 className={`${styles.subheading} ${styles.col1}`}>Our Mission</h4>
        <p className={`${styles.content} ${styles.col2}`}>
          My Mess Meal aims to <strong>SAVE FOOD</strong> and minimize the
          wastage of food. It aims to provide food to the needy, underpriviliged
          people and utilize every grain of food grown on this planet. It also
          creates awareness among youth to stop wastage of food and understand
          its importance.
        </p>
      </div>
      <div className={styles.row}>
        <h4 className={`${styles.subheading} ${styles.col1}`}>Features</h4>
        <ul className={`${styles.content} ${styles.col2}`}>
          <div className={styles.left}>
            <li>Shows upcoming meal to the users to help them decide.</li>
            <li>
              Provide meal entry form to mark their availability and help the
              chef to cook food accordingly.
            </li>
            <li>Feedback form to give feedback on food quality and taste.</li>
            <li>
              Calorie tracker to track the calorie intake during the day and
              maintain healthy lifestyle.
            </li>
          </div>
          <div className={styles.right}>
            <li>
              Recipe section provides:
              <ul className={styles.sublist}>
                <li>List of recipes</li>
                <li>Option to add or remove a recipe as favorite</li>
                <li>Add a new recipe into the list</li>
              </ul>
            </li>
            <li>Menu shows the complete menu of the week</li>
            <li>
              Menu calendar provides the facility to mark the availability for
              the meal in advance.
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default AboutData;
