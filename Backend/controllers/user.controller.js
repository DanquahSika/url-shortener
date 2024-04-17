import { userModel } from "../models/user.model.js";


export const registerUser = async (req, res, next) => {
    try {
        // Add user to database
        const createUser = await userModel.create({...req.body})

        // return response
        res.status(201).json(createUser);
    } catch (error) {
        next(error);
    }
}

export const loginUser = (req, res, next) => {

}


export const logoutUser = (req, res, next) => {


}

export const profile = (req, res, next) => {


}
