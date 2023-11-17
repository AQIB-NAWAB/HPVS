import React from "react";
import { ImCross } from "react-icons/im";

const OrderDetails = ({ showDetails, setShowDetails }) => {
  const closeModel = () => {
    setShowDetails(false);
  };
  return (
    <div className="view-profile-wrap">
      <div className="view-profile-detail-container">
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-semibold">Order Details</h1>
            <p className="cursor-pointer" onClick={() => closeModel()}>
              <ImCross />
            </p>
          </div>
          <div className="flex flex-col gap-3 ml-2">
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">User Email : </p>
              <p className="text-[#c0c6d3]">user@gmail.com</p>
            </span>
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order ID : </p>
              <p className="text-[#c0c6d3]">24324</p>
            </span>{" "}
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order Date : </p>
              <p className="text-[#c0c6d3]">user@gmail.com</p>
            </span>{" "}
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Tracking ID : </p>
              <p className="text-[#c0c6d3]">#434543</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Shipping Address :
              </p>
              <p className="text-[#c0c6d3]">Street 2,New housing society</p>
            </span>
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Billing Address :
              </p>
              <p className="text-[#c0c6d3]">Street 2,New housing society</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Shipped From :
              </p>
              <p className="text-[#c0c6d3]">Street 2,New housing society</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order Shipped To :</p>
              <p className="text-[#c0c6d3]">Street 2,New housing society</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Shipping Date :
              </p>
              <p className="text-[#c0c6d3]">10-04-20223</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Delivery Date :
              </p>
              <p className="text-[#c0c6d3]">16-04-20223</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order Total :</p>
              <p className="text-[#c0c6d3]">$3234</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Shipping Service :</p>
              <p className="text-[#c0c6d3]">COSCO Shipping Holdings</p>
            </span>
            <span className="flex justify-between">
                <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[20px]">Status :</p>
              <select   className="bg-[#283046] border border-blue-700 rounded-lg py-2 px-0 text-center flex justify-center pr-0 outline-none">
                <option value="" className="text-[13px]">Select</option>
                <option value="pending" className="text-[13px]">Pending</option>
                <option value="shipped" className="text-[13px]">Shipped</option>
                <option value="delivered" className="text-[13px]">Delivered</option>
              </select>
              </span>
              <span>
                <button className="bg-blue-700 text-white px-4 py-2 border-none rounded-lg" onClick={()=>closeModel()}>Update</button>
                </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
