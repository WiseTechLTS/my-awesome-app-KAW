const express = require('express')
const app = express()
// Simple node app 
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send('Hello Kyle Wisecarver! Nice to see you!')
=======
    res.send('Hello Kyle Wisecarver and the rest of the world out there!')
>>>>>>> feature2
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})