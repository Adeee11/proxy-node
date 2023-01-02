const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/api/redirect"));
app.use("/api/users", require("./routes/api/users"));
app.use("/modify", require('./routes/api/modify'));
app.listen(3000, () => console.log('Server started'));