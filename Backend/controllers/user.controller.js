// import { userModel } from "../models/user.model.js";


export const registerUser = async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;
  
      // Check if confirmPassword field matches password
      if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
  
      
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user instance
      const user = new User({ username, email, password: hashedPassword });
  
      // Save user to database
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Login existing user
  export const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
      // Store user in session 
      // req.session.user = user; 
      res.json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  export const logoutUser = (req, res, next) => {
    try {
      // Check if user is logged in
      if (req.session.user) {
        // Destroy the session
        req.session.destroy((err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
          }
          // Clear the cookie
          res.clearCookie('session-id');
          // Send success response
          res.json({ message: 'Logout successful' });
        });
      } else {
        // Send error response if user is not logged in
        res.status(401).json({ message: 'User is not logged in' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

export const profile = (req, res, next) => {


}
