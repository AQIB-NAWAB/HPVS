const express = require("express");
const Router = express.Router();
const path = require("path");
const Order=require("../models/OrderModel");
const sendEmail = require("../utilis/sendEmail");
Router.use(express.json());
Router.use(express.urlencoded({ extended: false }));

// Admin Login
Router.post("/loginAdmin", (req, res) => {
const email = req.body.email;
const password = req.body.password;
if (email === "admin@gmail.com" && password === "password") {
res.status(200).json({user:true})
}else{
  res.status(401).json({user:false,message:"Invalid Credentials"})
}
});
// Get All Orders of status pending with theirs count
Router.get("/pendingOrders", async (req, res) => {
  try {
    const pendingOrders = await Order.find({ order_status: "pending" });
    res.status(200).json({ pendingOrders: pendingOrders,pendingOrdersCount:pendingOrders.length });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// Get All Orders of status processing with theirs count
Router.get("/processingOrders", async (req, res) => {
  try {
    const processingOrders = await Order.find({ order_status: "processing" });
    res.status(200).json({ processingOrders: processingOrders,processingOrdersCount:processingOrders.length });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// Get All delivered Orders with theirs count
Router.get("/deliveredOrders", async (req, res) => {
  try {
    const deliveredOrders = await Order.find({ order_status: "delivered" });
    res.status(200).json({ deliveredOrders: deliveredOrders,deliveredOrdersCount:deliveredOrders.length });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// Get All Orders with theirs count
Router.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.status(200).json({ allOrders: allOrders,allOrdersCount:allOrders.length });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// add a new order
Router.post("/addOrder", async (req, res) => {
  try {
    // check if there any order with same order_Id or tracking_id
    const isOrderExistWithOrderId = await Order.findOne({
      order_id: req.body.order_id,
    })
    const isOrderExistWithTrackingId = await Order.findOne({
      tracking_id: req.body.tracking_id,
    })
    if(isOrderExistWithOrderId || isOrderExistWithTrackingId){
      res.status(409).json({message:"Order with same order id or tracking id already exist"})
    }

    const order = new Order(req.body);
    const result = await order.save();
    await sendEmail({
      email: result.user_email,
      subject:"Order Placed Successfully",
      message:`Your order has been placed successfully. Please check your order details. Tracking Id for your order is ${result.tracking_id} . Thank you for shopping with us. Have a nice day.  `,
    })
    res.status(200).json({ order: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// update order status
Router.put("/updateOrderStatus/:id", async (req, res) => {
  try {
    const id=req.params.id
    console.log(id,req.body.order_status)
    const isOrderExist=await Order.findOne({_id:id})
    if(!isOrderExist){
      return res.status(404).json({message:"Order not found"})
    }
    const order=await Order.findOne({_id:id})
    order.order_status=req.body.order_status

    const result=await order.save()
    await sendEmail({
      email: result.user_email,
      subject:`Order Status Updated to ${req.body.order_status}`,
      message:`Your order status has been updated to ${req.body.order_status} . Please check your order details. Tracking Id for your order is ${result.tracking_id} . Thank you for shopping with us. Have a nice day.  `,
    });
    res.status(200).json({message:`Order Status Updated to ${req.body.order_status}` });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// delete order
Router.put("/deleteOrder", async (req, res) => {
  try {
    const result = await Order.deleteOne(
      { order_id: req.body.order_id },
    );
    res.status(200).json({ message: "Order Deleted" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
// get the order details by tracking id
Router.get("/getOrderDetails/:tracking_id", async (req, res) => {
  try {
    const result = await Order.findOne(
      { tracking_id: req.params.tracking_id },
    );
    res.status(200).json({ order: result });
  } catch (error) {
    res.status(500).json({message:"Invalid tracking id", error: error });
  }
});

// search the order by many fields using query params
Router.get("/searchOrder", async (req, res) => {
  try {
    const result = await Order.find(
      { 
        order_id: req.query.order_id,
        tracking_id: req.query.tracking_id,
        user_email: req.query.user_email,
      },
    );
    res.status(200).json({ order: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

Router.get('/orders/monthly-count-with-names', async (req, res) => {
  try {
    // Use Mongoose aggregate method to group orders by month and count them
    const monthlyOrdersCount = await Order.aggregate([
      {
        $group: {
          _id: { $month: '$order_date' },
          count: { $sum: 1 },
        },
      },
    ]);

    // Map month numbers to month names
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];

    // Create an array with month names and counts for the chart data
    const data = monthNames.map((monthName, index) => ({
      count: 0,
    }));

    // Update counts for months with orders
    monthlyOrdersCount.forEach((entry) => {
      const monthIndex = entry._id - 1; // Month numbers are 1-indexed
      data[monthIndex].count = entry.count;
    });
    // convert the data into array containg the umbers just
    const dataArr=data.map((entry)=>entry.count)

    // Send the data as JSON response
    res.json({ data:dataArr });
  } catch (error) {
    // Handle errors, e.g., send a 500 Internal Server Error response
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});







module.exports = Router;