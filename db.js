const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://ranitmondalbcd:MEANdev%401998@cluster0.djos581.mongodb.net/employeeManagment?retryWrites=true'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}