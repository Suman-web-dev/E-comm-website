import jwt from "jsonwebtoken"; // Use import syntax for consistency

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach the decoded userId to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Token verification error:", error); // Log the error for debugging
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authMiddleware; // Use export default for consistency