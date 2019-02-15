/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const express = require('express');
const uuid = require('uuid');
const cors = require('cors');
const randtoken = require('rand-token');

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
        users: [
            {
                login: 'user',
                password: '12345',
            },
        ],
    },
];

app.get('/api/todolists', (req, res) => res.json(toDoList));

app.get('/api/todolists/:id', (req, res) => {
    const list = toDoList.find(list => list.id === req.params.id);
    if (!list) {
        res.sendStatus(404);
    }
    res.json(list);
});

app.post('/api/todolists', (req, res) => {
    // console.log(req.body);
    if (
        typeof req.body.todoListName !== 'string'
        || !Array.isArray(req.body.tasks)
        || req.body.tasks.some(item => typeof item.id !== 'string'
        || typeof item.body !== 'string' || typeof item.isComplete !== 'boolean')
    ) {
        res.sendStatus(400);
    } else {
        const newList = {
            id: uuid(),
            tasks: req.body.tasks.map(item => ({
                id: uuid(),
                body: item.body,
                isComplete: item.isComplete,
            })),
            todoListName: req.body.todoListName,
            userOwnerId: uuid(),
        };
        toDoList.push(newList);
        res.json(newList);
    }
});

app.post('/api/auth/login', (req, res) => {
    console.log('=== auth ===');
    console.log(req.body);
    let status;
    if (typeof req.body.usernameOrEmail !== 'string'
        || typeof req.body.password !== 'string') {
        res.sendStatus(400);
    } else {
        toDoList.forEach((item) => {
            if (item.users.some(user => user.login === req.body.usernameOrEmail
                && user.password === req.body.password)) {
                status = true;
            } else {
                status = false;
            }
        });
        if (status) {
            // res.send('POST request to the homepage');
            const token = randtoken.generate(16);
            res.status(200).json(token);
            // res.send("SUCCESS!");
            // res.redirect('/api/todolists');
        } else {
            res.sendStatus(401);
        }
    }
});

app.post('/api/auth/register', (req, res) => {
    console.log('=== registration ===');
    console.log(req.body);
    if (toDoList.some(item => item.users.some(user => user.login === req.body.username)) === true) {
        res.sendStatus(400);
    } else {
        const newUser = {
            login: req.body.username,
            password: req.body.password,
        };
        // console.log(newUser);
        toDoList.forEach(item => item.users.push(newUser));
        // toDoList.forEach(item => console.log(item.users));
        res.sendStatus(201);
    }
});

app.put('/api/todolists/:id', (req, res) => {
    if (
        typeof req.body.todoListName !== 'string'
        || !Array.isArray(req.body.tasks)
        || req.body.tasks.some(item => typeof item.id !== 'string'
        || typeof item.body !== 'string' || typeof item.isComplete !== 'boolean')
    ) {
        res.sendStatus(400);
    } else {
        const listIndex = toDoList.findIndex(list => list.id === req.params.id);
        if (listIndex === -1) {
            res.sendStatus(404);
        } else {
            const list = toDoList[listIndex];
            toDoList[listIndex].todoListName = req.body.todoListName;
            toDoList[listIndex].tasks = req.body.tasks;
            res.sendStatus(200);
        }
    }
});

app.delete('/api/todolists/:id', (req, res) => {
    // console.log(toDoBoard, )
    const listIndex = toDoList.findIndex(list => list.id === req.params.id);
    if (listIndex === -1) {
        res.sendStatus(404);
    } else {
        toDoList.splice(listIndex, 1);
        res.sendStatus(200);
    }
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
