import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Ingredients from "./components/Ingredients/Ingredients"
import Meals from "./components/Meals/Meals"
import Area from "./components/Area/Area"
import Layout from "./components/Layout/Layout"
import Notfound from "./components/Notfound/Notfound"
import MealDetails from "./components/MealDetails/MealDetails"

let rout =createBrowserRouter([{
  path:'', element:<Layout/>,children:[
    {index:true,element:<Meals/>},
    {path:'ingredients',element:<Ingredients/>},
    {path:'area',element:<Area/>},
    {path:'mealdetails/:id',element:<MealDetails/>},
    {path:'*',element:<Notfound/>},
  ]
}])

function App() {

  return (
   <>
   <RouterProvider router={rout}> </RouterProvider>
   
   </>
  )
}

export default App
