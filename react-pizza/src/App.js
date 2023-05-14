import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from "./pizzas.json" // в json хранятся все данные про пиццы
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((obj)=> (<PizzaBlock {...obj}/>)) //рендерим пиццы
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
