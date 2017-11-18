const test = require('tape')
const request = require('supertest')
const app = require('../server')

test('First test case', (t) => {
  t.equal(1,1)
  t.end()
})
test('GET /students', (t) =>{
  request(app).get('/students')
    .expect(200)
    .then((res) =>{
      let students = res.body
      t.equal(2,students.length)
      let student = students[0]
      t.notEqual(undefined,student.id)
      t.end()
    })
})

test('POST /students',(t)=>{
  request(app).post('/students')
  .send({name: 'Tangmo',email: '58660129@go.buu.ac.th'})
  .expect(200)
  .then((res) =>{
    let student = res.body
    t.equal('Tangmo',student.name)
    t.end()
  })
})
