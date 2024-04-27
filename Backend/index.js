import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import userRoutes from "./routes/user.routes.js";
import linkRoutes from "./routes/link.routes.js";

const port = process.env.PORT || 4000;
const MongoDBStore = ConnectMongoDBSession(session);

// load env variables
dotenv.config({ path: [".env.local"] });

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
  session({
    secret: "adasdasdadasadsa",
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);

//  load routes
app.use("/api/users", userRoutes);
app.use("/api/links", linkRoutes);

// Middleware error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

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
