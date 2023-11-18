import { useContext, useState } from "react";
import { AdminContext } from "./adminContext";
import axios from "axios";
import baseUrl from "./baseUrl";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AdminContextProvider = (props) => {
  const [admin, setAdmin] = useState(false);
  const [pendingOrders,setPendingOrders]=useState()
  const [processingOrders,setProcessingOrders]=useState()
  const [deliveredOrders,setDeliveredOrders]=useState()
  const [allOrders,setAllOrders]=useState()
  const [chartData,setChartData]=useState()
const navigate=useNavigate();
  const loginAdmin=async (email,password)=>{
  try {
    const result=await axios.post(`${baseUrl}/loginAdmin`,{email:email,password:password})
    if(result.data.user){
      setAdmin(true)
      navigate("/dashboard")
      toast.success("Login Successfull")
      localStorage.setItem('admin',true)
      window.scrollTo(0,0)
    }
  } catch (error) {
    localStorage.setItem('user',false)
    console.log(error)

  }

}

// Get All pending orders 
const getPendingOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/pendingOrders`)
    setPendingOrders(result.data)
    console.log(result.data.pendingOrdersCount) 
  } catch (error) {
    console.log(error)
  }
}
// Get All processing orders
const getProcessingOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/processingOrders`)
    setProcessingOrders(result.data)
  } catch (error) {
    console.log(error)
  }
}


// Get All deliverd orders
const getDeliveredOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/deliveredOrders`)
    setDeliveredOrders(result.data)
  } catch (error) {
    console.log(error)
  }
}
// Get All Orders
const getAllOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/allOrders`)
    setAllOrders(result.data)
  } catch (error) {
    console.log(error)
  }
}
// Get orders count according to month
const getChartData=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/orders/monthly-count-with-names`)
    setChartData(result.data)
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}

// update the status of order 
const updateOrderStatus=async (id,order_status)=>{
  try {
    const result=await axios.put(`${baseUrl}/updateOrderStatus/${id}`,{order_status:order_status})
    toast.success("Order Status Updated Successfully");

    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}

// add order 
const addOrder=async (order)=>{
  try {
    const result=await axios.post(`${baseUrl}/addOrder`,order)
    toast.success("Order Added Successfully");

    console.log(result.data)
  } catch (error) {
    if(error.response.status===409){
      toast.error("Order with same order id or tracking id already exist");
    }
    console.log(error)

  }
}
  return (
    <AdminContext.Provider value={{ admin,loginAdmin,setAdmin,pendingOrders,getPendingOrders,getProcessingOrders,processingOrders,getAllOrders,allOrders,deliveredOrders,getDeliveredOrders,chartData,getChartData ,updateOrderStatus,addOrder}}>
      {props.children}
    </AdminContext.Provider>
  );
}
export const useAdminContext = () => useContext(AdminContext);
export default AdminContextProvider;