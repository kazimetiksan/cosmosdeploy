var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://newcosmoske:ZWwVLNWISqyybnUEq86rXvlv88q3h9LpYCHTDPrAzDGDmqie3m20dKKzZhTOUq9eX1bfHaRlLSQ2g6AGv4ejjA==@newcosmoske.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@newcosmoske@', {
    useNewUrlParser: true,
    socketTimeoutMS: 5000,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.catch((err) => {
    console.log({err})
})

module.exports = {mongoose};