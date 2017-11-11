const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let students =[
  {id: 1, name: 'Tangmo', email: '58660129@go.buu.ac.th'},
  {id: 2, name: 'Thitima', email: '58660129@go.buu.ac.th'}
]

app.post('/students', (reg, res) =>{
  let student = reg.body
  students.push(student)
  res.json(student)

})
app.get('/students',(reg, res) =>{
  res.json(students)
})
app.get('/greeting', (reg, res) => {
  res.json({message: 'Hello'})
})

module.exports = app
