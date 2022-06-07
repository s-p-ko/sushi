import styles from './MealList.module.css';

const MEALS = [
  {
    id: 'm1',
    name: 'Roll "Naomi"',
    description:
      'Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Spice in salmon',
    description: 'Rice, salmon, spice sauce',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Sushi with eel',
    description: 'Smoked eel, unagi sauce, sesame',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Salad "Salmon Poke"',
    description: 'Rice, salmon, cucumber, chuka, nori, tuna chips, nut sauce',
    price: 7.99,
  },
];

const MealList = () => {
  const mealList = MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default MealList;
