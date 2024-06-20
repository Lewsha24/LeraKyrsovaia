import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./main";
import AuthComponent from "./auth";
import MapsComponent from "./Maps";
import OpportunitiesComponent from "./OpportunitiesComponent";
import OpportunitiesComponentFree from "./OpportunitiesComponentFree";
import SuppliersComponent from "./SuppliersComponent";
import ComingComponent from "./ComingComponent";
import RefundToStore from "./RefundToStore";
import RefundToSupplier from "./RefundToSupplier";
import StocksComponent from "./StocksComponent";
import SaleComponent from "./SaleComponent";
import PageNotFound from "./PageNOtFound";
import ServiceComponent from "./ServiceComponent";
import InosesComponent from "./ShopComponent";
import ShopComponent from "./ShopComponent";
import ShoesComponent from "./ShopComponent"
import Pilow from "./ShopComponent"
import Vitamins from "./ShopComponent"
import InfoContentComponent from "./InfoContentComponent";

const App = () => {
   return (
   <BrowserRouter>
      <Routes>
         <Route path="" element={<Main/>} />
         <Route path="/auth" element={<AuthComponent/>} />
         <Route path="/map" element={<MapsComponent/>} />
         <Route path="auth/opportunities" element={<OpportunitiesComponent/>} />
         <Route path="/free" element={<OpportunitiesComponentFree/>} />
         <Route path="/suppliers" element={<SuppliersComponent/>} />
         <Route path="/coming" element={<ComingComponent/>} />
         <Route path="/supplier" element={<RefundToSupplier/>} />
         <Route path="/toStore" element={<RefundToStore/>} />
         <Route path="/stocks" element={<StocksComponent/>} />
         <Route path="/stocks" element={<StocksComponent/>} />
         <Route path="/sale" element={<SaleComponent/>} />
         <Route path="/service" element={<ServiceComponent/>} />
         <Route path="/shop" element={<ShopComponent/>} />
         <Route path="/shop/shoes" element={<ShoesComponent/>} />
         <Route path="/shop/shoes/:id" element={<InfoContentComponent/>} />
         <Route path="/shop/inoses" element={<InosesComponent/>} />
         <Route path="/shop/inoses/:id" element={<InfoContentComponent/>}
         <Route path="/shop/pilow" element={<Pilow/>} />
         <Route path="/shop/vitamins" element={<Vitamins/>}/>
         {/*Not page 404*/}
         <Route path="*" element={<PageNotFound/>}/>
      </Routes>
   </BrowserRouter>
   )
}
export default App
