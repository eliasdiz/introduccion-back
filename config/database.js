import mongoose from "mongoose";
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_LINK)
    .then( () => console.log('Conected To Database'))
    .catch( error => console.log('Ojo con este erro ----> : ',error))