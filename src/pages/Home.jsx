import React from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Sort } from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState(0)
 
  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://640b60e381d8a32198e2a60f.mockapi.io/items?category" + categoryId)
    .then(res => res.json())
    .then(json => {
      setItems(json)
      setIsLoading(false)
    })
    window.scrollTo(0, 0)
  }, [categoryId, sortType])

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.title} {...obj} />)}
      </div>
    </div>
  );
};
