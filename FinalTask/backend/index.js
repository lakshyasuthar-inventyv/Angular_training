// server.js
import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 3000;

// Enable JSON parsing and CORS for front-end calls
app.use(express.json());
app.use(cors());


function readUsersFile(callback) {
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
      return callback(err);
    }

    try {
      const users = JSON.parse(data || "[]"); // default empty array
      callback(null, users);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      callback(parseError);
    }
  });
}


function writeUsersFile(users, callback) {
  fs.writeFile("users.json", JSON.stringify(users, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing users.json:", err);
      return callback(err);
    }
    callback(null);
  });
}


app.get("/users", (req, res) => {
  readUsersFile((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data" });
    }
    res.json(users);
  });
});


app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  readUsersFile((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data" });
    }

    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  });
});


app.post("/users", (req, res) => {
  const newUser = req.body;

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ error: "Missing 'name' or 'email'" });
  }

  readUsersFile((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data" });
    }


    const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const userToAdd = { id: newId, ...newUser };

    users.push(userToAdd);

    writeUsersFile(users, (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: "Failed to save user" });
      }

      res.status(201).json(userToAdd);
    });
  });
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  readUsersFile((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data" });
    }

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    users[userIndex] = { ...users[userIndex], ...updatedData };

    writeUsersFile(users, (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: "Failed to update user" });
      }

      res.json(users[userIndex]);
    });
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  readUsersFile((err, users) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data" });
    }

    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    users.splice(userIndex, 1);

    writeUsersFile(users, (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: "Failed to delete user" });
      }

      res.status(204).send();
    });
  });
});

app.get("/", (req, res) => {
  res.send("Node.js + Express User API is running!");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
