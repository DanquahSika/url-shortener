import express from 'express'
import cors from "cors";
import dotenv  from 'dotenv';
import mongoose from "mongoose";
import UserRoutes from './routes/user.routes.js';
import linkRoutes from './routes/link.routes.js'

// load env variables
dotenv.config({path:[".env.local"]});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//  load routes
app.use('/api/users', UserRoutes)
app.use('/api/links', linkRoutes);

// Make database  connection
await mongoose.connect(process.env.MONGO_URI)

// server starter
app.listen(4000, () => {
    console.log("Express is running" )
});