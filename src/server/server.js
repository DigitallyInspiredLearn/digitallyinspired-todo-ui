/* eslint-disable */
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const toDoList = [
    {
        id: uuid(),
        tasks: [
            {
                body: 'Co',
                id: uuid(),
                isComplete: true,
            },
            {
                body: 'Destroy half of the universe',
                id: uuid(),
                isComplete: false,
            },
        ],
        todoListName: 'My to do list',
        userOwnerId: uuid(),
    },
];

app.get('/api/todolists', (req, res) => res.json(toDoList));

app.get('/api/todolists/:id', (req, res) => {
    const list = toDoList.find(list => list.idList === req.params.id);
    if (!list) {
        res.sendStatus(404);
    }
    res.json(list);
});

app.post('/api/todolists', (req, res) => {
    console.log(req.body);
    if (
        typeof req.body.todoListName !== 'string' ||
        !Array.isArray(req.body.tasks) ||
        req.body.tasks.some(item => typeof item.id !== "string" ||
            typeof item.body !== "string" || typeof item.isComplete !== "boolean")
    ) {
      res.sendStatus(400)
    } else {
      const newList = {
        id: uuid(),
        tasks: req.body.tasks.map(item => ({
          id: uuid(),
          body: item.body,
          isComplete: item.isComplete
        })),
        todoListName: req.body.todoListName,
        userOwnerId: uuid()
      };
      toDoList.push(newList);
      res.json(newList)
    }
});

app.put('/api/todolists/:id', (req, res) => {
  if (
      typeof req.body.todoListName !== "string" ||
      !Array.isArray(req.body.tasks) ||
      req.body.tasks.some(item => typeof item.id !== "string" || typeof item.body !== "string" || typeof item.isComplete !== "boolean")
  ) {
    res.sendStatus(400)
  } else {
    const listIndex = toDoList.findIndex(list => list.id === req.params.id);
    if (listIndex === -1) {
      res.sendStatus(404)
    } else {
      const list = toDoList[listIndex];
      toDoList[listIndex].todoListName = req.body.todoListName;
      toDoList[listIndex].tasks = req.body.tasks;
      res.sendStatus(200)
    }
  }
});

app.delete("/api/todolists/:id", (req, res) => {
  // console.log(toDoBoard, )
  const listIndex = toDoList.findIndex(list => list.id === req.params.id);
  if (listIndex === -1) {
    res.sendStatus(404)
  } else {
    toDoList.splice(listIndex, 1);
    res.sendStatus(200)
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
});