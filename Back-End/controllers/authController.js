import User from "../models/User.js"; // Ensure you use import syntax and .js extension
import bcrypt from "bcryptjs"; // Import bcrypt using ES Module syntax
import jwt from "jsonwebtoken"; // Import jwt using ES Module syntax
import nodemailer from "nodemailer"; // Import nodemailer if you haven't

// Signup Controller
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const userData = {
      id: newUser._id,
      name: newUser.username,
      email: newUser.email,
    };

    console.log("Signup response:", { user: userData, token }); // Debugging log

    res.status(201).json({ user: userData, token });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

// Login Controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const userData = {
      id: user._id,
      name: user.username,
      email: user.email,
    };

    console.log("Login response:", { user: userData, token }); // Debugging log

    res.status(200).json({ user: userData, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

// Forgot Password Controller
export const forgotPassword = async (req, res) => {
  try {
    console.log("Received forgot password request:", req.body); // Debugging log

    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user.email);

    // Ensure JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    // Generate a password reset token
    const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    const resetLink = `http://yourfrontend.com/reset-password/${resetToken}`; // Update with your frontend URL

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS, // Use environment variable
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send the password reset email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      text: `Click the link to reset your password: ${resetLink}`, // Include the reset link
    };

    await transporter.sendMail(mailOptions);
    console.log("Password reset email sent");

    // Return success response
    return res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};