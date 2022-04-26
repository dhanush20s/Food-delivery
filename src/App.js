import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, Header, MainContainer } from './components'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'

const App = () => {
  const[{foodItems},dispatch]= useStateValue();

  const fetchData =async () => {
    await getAllFoodItems ().then(data => {
      dispatch({
        type:actionType .SET_FOOD_ITEMS,
        foodItems:data,
      })
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary ">
        <Header/>

        <main className="mt-16 md:mt-24 p-8 w-full ">
            <Routes>
                <Route path="/*" element={ <MainContainer/>}/>
                <Route path="/CreateItem" element={ <CreateContainer/>}/>
            </Routes>
        </main>
    </div>
    </AnimatePresence>
  )
}

export default App