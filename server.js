const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

const todos = [
    { id: 1, title: 'Learn Angular', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Vue', completed: false }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})