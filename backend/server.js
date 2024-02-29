import express from "express";
import dotenv  from "dotenv";
import authRoutes from "./routes/auth.routes.js"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("Hello !");
});

// app.get("/api/auth/signup", (req, res) => {
//     console.log("signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//     console.log("login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//     console.log("logout route");
// });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}` ));