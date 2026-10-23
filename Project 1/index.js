const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 9000;


// SSR Route (HTML List)
app.get("/users", (req, res) => {
  const html = `
    <ul> 
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// // API Route (JSON)


app.get("/api/users", (req, res) => {
  return res.json(users);
});



app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

    return res.json(user);
});

// app.route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {
//     // Edit user with given id
//     return res.json({ status: "Pending", message: "User updated" });
//   })
//   .delete((req, res) => {
//     // Delete user with given id
//     return res.json({ status: "Pending", message: "User deleted" });
//   });


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});