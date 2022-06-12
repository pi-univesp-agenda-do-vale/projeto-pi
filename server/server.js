require("dotenv").config();

const express = require("express");

var cors = require('cors');

const app = express(); 

app.use(cors());

app.use(express.json());

app.use("/users", require("./routes/usersRoutes"));

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Ocorreu um problema",
    });
});

// Listen on pc port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

