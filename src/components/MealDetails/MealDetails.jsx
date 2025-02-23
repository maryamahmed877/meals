import React, { useEffect, useState } from 'react'
import style from './MealDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function MealDetails() {
  const [mealDetails, setmealDetails] = useState([])
  const { id } = useParams()
  console.log(id);

  async function getMealDetails(id) {
    try {
      let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      setmealDetails(data.meals)
      console.log(data.meals);
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getMealDetails(id)
  }, [])


  return (
    <>
      <div className='min-h-dvh'>
        {mealDetails.map((meal, index) => <div  key={index}>
        <h1 className='text-4xl text-[#F29724] font-bold  mb-3 mt-8'>{meal.strMeal}</h1>
        <div className='lg:flex flex-wrap'>
        <div className='lg:w-1/3   text-center mt-4'>
            <img className='rounded-3xl' src={meal.strMealThumb} alt="" />
            <div className='mt-4'>
            <Link to={meal.strYoutube} className=' px-4 py-2  my-4 bg-[#DC2626] hover:bg-red-700 text-white rounded-lg '><i className='fa-brands fa-youtube'></i> Youtube</Link>
          {meal.srtSource !== null &&<Link to={meal.strSource} className='px-4 py-2  my-4 bg-[#21BA75] hover:bg-emerald-700 text-white rounded-lg ml-4'><i className='fas fa-earth'></i> source</Link>
        }
            </div>
          </div>
          <div className='lg:w-1/3 px-4 mt-4'>
            <p className='text-slate-800'>{meal.strInstructions}</p>
          </div>
          <div className='lg:w-1/3 mt-4'>
          <div className='bg-white p-8 rounded-lg'>
          <h3 className='border-b-2 border-slate-100 text-2xl font-semibold mb-4 '>Ingredients</h3>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3'><span>{meal.strIngredient1}</span><span> {meal.strMeasure1}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span>{meal.strIngredient2}</span><span> {meal.strMeasure2}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span>{meal.strIngredient3}</span><span> {meal.strMeasure3}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span>{meal.strIngredient4}</span><span> {meal.strMeasure4}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span>{meal.strIngredient5}</span><span> {meal.strMeasure5}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span>{meal.strIngredient6}</span><span> {meal.strMeasure6}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span> {meal.strIngredient7}</span><span> {meal.strMeasure7}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span> {meal.strIngredient8}</span><span> {meal.strMeasure8}</span></div>
            <div className='flex justify-between items-center border-b border-slate-100 mb-3 '><span> {meal.strIngredient9}</span><span> {meal.strMeasure9}</span></div>
            
          </div>
          </div>
        </div>
        </div>)}
      </div>
    </>
  )
}
