const express= require('express')
const app = express();

app.use (express.json())
app.use(express.urlencoded({extended:true}))
const cors=require('cors')

// const userRoutes = require('./components/users/user')
const userRoutes = require('./components/users/user')
const classRoomRoutes = require('./components/classroom/classroom')
const studentsRoutes =require('./components/students/students')
const courseRoutes=require('./components/courses/courses')
const attendenceRoutes=require('./components/attendence/attendence')


// Enable CORS for all routes
app.use(cors());

// Initialize DB
require('./initDB')();

app.use('/users',userRoutes)
app.use('/classroom',classRoomRoutes)
app.use('/students',studentsRoutes)
app.use('/courses',courseRoutes)
app.use('/attendence',attendenceRoutes)

// app.use('/dash/products',productRoutes)

const PORT =4000;
app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });
app.listen(PORT,()=>{
    console.log('Server started on port ' + PORT + '...');
})