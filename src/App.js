import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUs, CreateContainer, Header, HomeContainer, MainContainer, MenuContainer } from './components'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'
import Footer from './Footer/Footer'
import Offer from './components/Offer'

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

        <main className="mt-20 md:mt-20 p-8 w-full ">
            <Routes>
                <Route path="/" element={ <MainContainer/>}/>
                <Route path="/CreateItem" element={ <CreateContainer/>}/>
                <Route path="/Home" element={ <HomeContainer/>}/>
                <Route path="/Menu" element={ <MenuContainer/>}/>
                <Route path="/AboutUs" element={ <AboutUs/>}/>
                <Route path="/Offer" element={ <Offer/>}/>
            </Routes>
        </main>
        <Footer/>
    </div>
    </AnimatePresence>
  )
}

export default App