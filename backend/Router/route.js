const express = require("express");
const Router = express.Router();
const path = require("path");
const Order=require("../models/OrderModel");
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
    const order = new Order(req.body);
    const result = await order.save();
    res.status(200).json({ order: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// update order status
Router.put("/updateOrderStatus", async (req, res) => {
  try {
    const result = await Order.updateOne(
      { order_id: req.body.order_id },
      { order_status: req.body.order_status }
    );
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
        order_status: req.query.order_status,
        order_total: req.query.order_total,
        order_shipping_address: req.query.order_shipping_address,
        order_billing_address: req.query.order_billing_address,
        tracking_id: req.query.tracking_id,
        order_shipped_from: req.query.order_shipped_from,
        order_shipped_to: req.query.order_shipped_to,
        shipping_service: req.query.shipping_service,
      },
    );
    res.status(200).json({ order: result });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});








module.exports = Router;