// src/index.ts
import express from "express";

// src/routes/users/getUsers.ts
var getUsers = (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" }
  ];
  res.json(users);
};

// src/index.ts
var app = express();
var port = process.env.PORT || 3e3;
app.use(express.json());
app.get("/users", getUsers);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
export {
  app
};
