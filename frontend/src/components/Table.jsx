import React, { useState } from "react";
import "./components.css";
import { FaEye } from "react-icons/fa";
import OrderDetails from "./OrderDetails";

const Table = () => {
  const[search,setSearch]=useState({
    order_id :'',
    tracking_id :'',
    user_email:''
  })
  const inputHandle=(e)=>{
    setSearch({
      ...search,
      [e.target.name] : e.target.value,
    })
  }
  const submit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const [showDetails, setShowDetails] = useState(false);

  const handleEyeIconClick = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <span className="bg-[#283046] w-[86%] ml-[7%] rounded-lg px-10 py-5">
        <p className="text-white text-[22px] mb-3  ">Search Order</p>
        <span>
          <form onSubmit={submit} className="flex flex-col md:flex-row gap-5">
            <input
              id="order_id"
              type="text"
              placeholder="Enter Order ID"
              name="order_id"
              onChange={inputHandle}
              value={search.order_id}
              required
              className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
            />
            <input
              id="tracking_id"
              type="text"
              placeholder="Enter Tracking ID"
              name="tracking_id"
              onChange={inputHandle}
              value={search.tracking_id}
              required
              className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
            />
            <input
              id="user_email"
              type="text"
              placeholder="Enter User Email"
              name="user_email"
              onChange={inputHandle}
              value={search.user_email}
              required
              className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
            />
            <button className="bg-blue-700 px-7 py-1 text-white border-blue-700 rounded-lg shadow-blue-900 hover:bg-blue-800">
              Search Order
            </button>
          </form>
        </span>
      </span>
      <div className="Table">
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tracking ID</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Shipping Service</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>#1231323</td>
                <td>10-01-23</td>
                <td>15-02-23</td>
                <td>COSCO Shipping Holdings</td>
                <td>
                  <span className="pending">Pending</span>
                </td>
                <td className="actions">
                  <li
                    className="p-[6px] w-[40px] cursor-pointer bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center"
                    onClick={handleEyeIconClick}
                  >
                    <FaEye />
                  </li>
                </td>
                {showDetails && (
                  <OrderDetails
                    showDetails={showDetails}
                    setShowDetails={setShowDetails}
                  />
                )}
              </tr>

              <tr>
                <td>1</td>
                <td>#1231323</td>
                <td>10-01-23</td>
                <td>15-02-23</td>
                <td>COSCO Shipping Holdings</td>
                <td>
                  <span className="pending">Pending</span>
                </td>
                <td className="actions">
                  <li className="p-[6px] w-[40px] cursor-pointer bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center">
                    <FaEye />
                  </li>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>#1231323</td>
                <td>10-01-23</td>
                <td>15-02-23</td>
                <td>TrackCourier.io</td>
                <td>
                  <span className="posted">Shipped</span>
                </td>
                <td className="actions">
                  <li className="p-[6px] w-[40px] cursor-pointer bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center">
                    <FaEye />
                  </li>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
