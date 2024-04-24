import { Routes, Route } from "react-router-dom"
import { Mesin, Roda,Bohlam,Baterai,Rantai,Home, Busi, PageNotFound} from "../pages"

export const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-700">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mesin" element={<Mesin />} />
        <Route path="/roda" element={<Roda />} />
        <Route path="/bohlam" element={<Bohlam />} />
        <Route path="/rantai" element={<Rantai />} />
        <Route path="/baterai_and_sekring" element={<Baterai />} />
        <Route path="/busi_and_oli" element={<Busi />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
