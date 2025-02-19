
import  {React } from "react";
import Introduction from "./components/assets/Introduction";
import CustomerService from "./components/CustomerService";
import Usage from "./components/Usage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function Home() {
  

   return (
  
    <div className=" flex flex-col">
      <Header></Header>
      <Hero></Hero>
     <Companies></Companies>
     <Introduction></Introduction>
     <Usage></Usage>
     <CustomerService></CustomerService>
     <Footer></Footer>

     </div>
  );
}

export default Home