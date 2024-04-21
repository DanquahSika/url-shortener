import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import userRoutes from "./routes/user.routes.js";
import linkRoutes from "./routes/link.routes.js";

const port = process.env.PORT || 4000;

// load env variables
dotenv.config({ path: [".env.local"] });

const app = express();

// Middleware error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: "adasdasdadasadsa",
    resave: false,
    saveUninitialized: false,
  })
);

//  load routes
app.use("/api/users", userRoutes);
app.use("/api/links", linkRoutes);

// Make database  connection
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// server starter
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
