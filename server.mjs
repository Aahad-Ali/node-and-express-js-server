import express from 'express';


console.log('Aahad')


const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

    console.log('request :', req.ip)
  res.send('Aahad Ali'+'<br />'+new Date().toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})