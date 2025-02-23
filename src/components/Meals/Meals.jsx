import React, { useEffect, useState } from "react";
import style from './Meals.module.css'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Meals() {
  const [categories, setcategories] = useState([])
  const [nameOfCategory, setnameOfCategory] = useState("Beef")
  const [meals, setMeals] = useState([])

 async function getCategories(){
  try {
    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    console.log(data);
    setcategories(data.meals)
    
  } catch (error) {
    console.log(error);
    
  }
 }
 async function getmeals(nameOfCategory){
  try {
    console.log(nameOfCategory);
    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameOfCategory}`)
    setMeals(data.meals)
    console.log(data);
    
  } catch (error) {
    console.log(error);
    
  }
 }
 useEffect(()=>{
  getCategories()
 },[])
 useEffect(()=>{
  getmeals(nameOfCategory)
 },[nameOfCategory])
  return (
    <>
      <div className="container ">
        <h1 className="text-4xl text-[#F29724] font-bold my-4">Learn, Cook, Eat Your Food</h1>
        <ul className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <li onClick={()=>setnameOfCategory(category.strCategory)}  className={`${nameOfCategory===category.strCategory&& style.active} border border-gray-500 px-4 py-2 rounded-3xl text-gray-700 hover:shadow-2xl hover:bg-white duration-300 cursor-pointer`} key={index}>{category.strCategory}</li>
          ))}
        </ul>
      </div>
      <div className='flex flex-wrap  '>
   {meals.map((meal)=>(
      <div key={meal.idMeal} className=' w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-center p-6'>
        <div className=' hover:scale-110 duration-500 group bg-white p-4 rounded-2xl'>
        <img className='group-hover:rotate-[360deg] duration-700 w-[50%] rounded-[50%] m-auto ' src={meal.strMealThumb}  alt="" />
        <h2 className='font-bold'>
  {meal.strMeal.split(" ").slice(0, 2).join(" ")}
</h2>
        <h2 className='mb-2 text-[#21BA75]'><i className='fas fa-earth'></i> {meal.strArea}</h2>
        <Link to={`/mealdetails/${meal.idMeal}`} className='inline-block px-4 py-2 rounded-2xl text-white bg-[#21BA75] hover:scale-105 hover:bg-[#059669] duration-300 '>View Recipe</Link>
        </div>
      </div>
    ))}
   </div>

    </>
  )
}