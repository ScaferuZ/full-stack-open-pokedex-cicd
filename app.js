const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`server started on port ${PORT}`) // eslint-disable-line no-use-before-define
  /* eslint-enable */
})
