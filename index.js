const express = require("express");
const shortid = require("shortid");

let courses = [
  {
    id: shortid.generate(),
    name: "React",
    teacher: "Ecaterina Popa",
  },
  {
    id: shortid.generate(),
    name: "Node",
    teacher: "Ecaterina Popa",
  },
  {
    id: shortid.generate(),
    name: "Java",
    teacher: "John Doe",
  },
];

const server = express();
const PORT = 1234;

server.get("/", (req, res) => {
  res.send("<h1>Hello World!!</h1>");
});

server.get("/courses", (req, res) => {
  res.json({ courses });
});

server.post("/courses", express.json(), (req, res) => {
  console.log("request", req.body);
  const newCourse = req.body;
  const shortid = require("shortid");
  courses.push({ ...newCourse, id: shortid.generate() });

  res.status(201).json({ status: "ok" });
});

server.put("/edit-course", express.json(), (req, res) => {
  const updCourse = req.body;

  courses = courses.map((el) => {
    if (el.id === updCourse.id) {
      return updCourse;
    }

    return el;
  });
  res.status(200).json({ courses });
});

server.patch("/edit-course", express.json(), (req, res) => {
  const updCourse = req.body;

  courses = courses.map((el) => {
    if (el.id === updCourse.id) {
      return {
        ...el,
        ...updCourse,
      };
    }

    return el;
  });
  res.status(200).json({ courses });
});

server.delete("/delete-course/:id", (req, res) => {
  courses = courses.filter((el) => {
    return el.id !== req.params.id;
  });
  res.status(200).json({ courses });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
