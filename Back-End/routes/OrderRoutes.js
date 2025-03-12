import express from "express";
import dotenv from "dotenv";
import Order from "../models/Order.js";
import nodemailer from "nodemailer";

dotenv.config();
const router = express.Router();

// Email configuration with environment variables
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // ✅ Ignore SSL certificate issues
    },
  });
  
  router.post("/send-email", async (req, res) => {
    try {
      console.log("Received email request:", req.body);
  
      const { email, subject, message } = req.body;
  
      if (!email || !subject || !message) {
        return res.status(400).json({ error: "Missing email, subject, or message" });
      }
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });
// Place Order
router.post("/place-order", async (req, res) => {
    try {
        console.log("Received order data:", req.body); // Debugging log

        const { userId, items, totalPrice, address, paymentMethod, email } = req.body;

        if (!userId || !items?.length || !totalPrice || !address || !paymentMethod || !email) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newOrder = new Order({
            userId,
            items,
            totalPrice,
            address,
            paymentMethod,
            status: "Pending",
        });

        const savedOrder = await newOrder.save();

        // Send order confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Order Confirmation",
            text: `Thank you for your order! Your order ID is ${savedOrder._id}.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
            } else {
                console.log("Email sent:", info.response);
            }
        });

        res.status(201).json({ message: "Order placed successfully", order: savedOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Fetch All Orders
router.get("/orders", async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 }); // Newest first
        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
