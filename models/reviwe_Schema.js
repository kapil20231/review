const {default : mmongoose,model}= require("mongoose")
const  reviewSchema = new mongoose.Schema({
    
        subject: {
          type: String,
          required: true,
        },
        review: {
          type: String,
          required: true,
        },
        ratting: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          required: true,
          default: true,
        },
        company_id :{
          type:mongoose.Schema.Types.ObjectId,
          ref : 'company'
         },
        user_id :{
          type:mongoose.Schema.Types.ObjectId,
          ref : 'users'
         }
   
});
reviewSchema.set('timestamps', true)
