import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header/Header';
import MealCalendar from './pages/MealCalendar';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Feedback from './pages/Feedback';
import Home from './components/home/Home';
import Menu from './pages/Menu';
import styles from './App.module.css';
import RecipeItems from './components/recipes/RecipeItems';
import Favorite from './components/recipes/Favorite';
import AddRecipes from './components/recipes/AddRecipes';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/meal-calendar' element={<MealCalendar />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='recipes/recipe-items' element={<RecipeItems />} />
        <Route path='recipes/favorite' element={<Favorite />} />
        <Route path='recipes/add-recipes' element={<AddRecipes />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
