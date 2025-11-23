import express from "express"; 
import "dotenv/config"; // Used to import and use .env file
import cors from "cors"; // Cross orgin resourse sharing allows communication between frontend and backend.
import mongoose from "mongoose"; // npm package used to connect MongoDB Atlas with our backend, also use to define schema and validations, middlewares
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json()); // This is going to parse our incomming requests
app.use(cors());

app.use("/api", chatRoutes); // Whichever request comes that starts with /api, send it to chatRoutes.

app.listen(PORT, () => {
  console.log(`server running on: ${PORT}`);
  connectDB(); // Whenever we are starting the server the second thing we are going to do is connect with db.
});

const connectDB = async() => { // Mongoose: To see this syntax visit mongoose npm documentation.
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database");
  } catch(err) {
    console.log(`Failed to connect with Database ${err}`);
  }
}

// This is how we are going to use GROQ's API to get replys of our input. Flow => user will type in input box on clicking submit or enter that text will be sent to backend in which we will take what user has typed and then we will send that in "options" object as content and will store the reply and display it neatly in frontend.
// app.post("/test", async (req, res) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${process.env.GROQ_API_KEY}`, // Pick both of these from groq api reference docs, just replace process.env.GROQ_API_KEY  
//     },
//     body: JSON.stringify({ // JSON.stringify(): Normal JS value → JSON string
//       model: "llama-3.3-70b-versatile", // We need to provide suitable model for our work
//       messages: [{ // This is an array this will help us store the history all the previous messages(role, content) will be stored in this array.
//         role: "user", // role: who is interacting with our model. In our project it is either user or assistant(model who is responding)
//         content: req.body.message // content: we want to pass the prompt which we will get in request form frontend input box that we will send in post request. Here we are accessing "message" so in Thunder Client we need to send "message" only.
//       }]
//     })
//   };
  
//   try {
//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", options); // we are giving the link along with the options object which has suitable properties we need to send in request(request body). We are storing the response in response variable
//     const data = await response.json(); //response.json(): Converts HTTP response body → JS object
//     // console.log(data);
//     res.send(data.choices[0].message.content); // Response // We have a data object, which has choices as array or objects, we need 0th ele of choices array, object at 0th element has multiple fields in which we need message object and in messge object we have content which is exactly what we need.
//   } catch(err) {
//     console.log(err);
//   }
// });

