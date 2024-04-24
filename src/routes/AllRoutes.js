import { Routes, Route } from "react-router-dom"
import { Mesin, Roda,Bohlam,Baterai,Rantai, Search, PageNotFound} from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-700">
        <Routes>
            <Route path="/" element={<Mesin/>} />
            <Route path="/mesin" element={<Mesin />} /> 
            <Route path="/roda" element={<Roda />} /> 
            <Route path="/bohlam" element={<Bohlam />} />
            <Route path="/rantai" element={<Rantai />} />
            <Route path="/baterai_and_sekring" element={<Baterai />} />
            <Route path="/search" element={<Search pathApi="search/movie"/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}
