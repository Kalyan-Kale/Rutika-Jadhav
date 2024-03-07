const User = require("../models/User");
require("dotenv").config();

// exports.createUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required 😇",
//       });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "User already exists. Please log in to continue 😀",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     let approved = "";
//     approved === "Instructor" ? (approved = false) : (approved = true);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       approved: approved,
//     });

//     return res.status(201).json({
//       success: true,
//       status: 201,
//       data: user,
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       status: 500,
//       message: "User cannot be registered. Please try again.",
//     });
//   }
// };

// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found 🧐' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ success: false, message: 'Invalid email or password! 😔' });
//     }

//     return res.status(200).json({ success: true, message: 'Login successful', data: user });
//   } catch (error) {
//     console.log('Error:', error);
//     return res.status(500).json({ success: false, message: 'Internal server error 🤖' });
//   }
// };

// ------------------------------------------------------

const {jwtAuthMiddleware, generateToken} = require('./../jwt');

// POST route to add a person
const signUp = async (req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the person data

        // Create a new Person document using the Mongoose model
        const newUser = new User(data);

        // Save the new person to the database
        const response = await newUser.save();
        console.log('data saved');

        const payload = {
            id: response.id,
            email: response.email
        }
        console.log(JSON.stringify(payload));
        const token = generateToken(payload);
        console.log("Token is : ", token);

        res.status(200).json({response: response, token: token});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

// Login Route
const login = async(req, res) => {
    try{
        // Extract username and password from request body
        const {email, password} = req.body;

        // Find the user by username
        const user = await User.findOne({email: email});

        // If user does not exist or password does not match, return error
        if( !user || !(await user.comparePassword(password))){
            return res.status(401).json({error: 'Invalid username or password'});
        }

        // generate Token 
        const payload = {
            id: user.id,
            email: user.email
        }
        const token = generateToken(payload);

        // return token as response
        res.json({token})
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Profile route
const profile = async (req, res) => {
    try{
        const userData = req.user;
        console.log("User Data: ", userData);

        const userId = userData.id;
        const user = await User.findById(userId);

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteProfile = async (req, res) => {
    try{
        const userId = req.params.id; // Extract the person's ID from the URL parameter
        
        // Assuming you have a Person model
        const response = await User.findByIdAndRemove(userId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data delete');
        res.status(200).json({message: 'person Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}


module.exports = {signUp, login, profile, deleteProfile};