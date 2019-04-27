const Schema = mongoose.Schema; 

const queueSchema = new Schema({
  id: {
    type: Number, 
    required: true
  },
  client: {
    type: Schema.Types.ObjectId, 
    required: true,
    ref: "User"
  }, 
  email: {
    type: String
  },
  comment: {
    type: string
  },
  business: {
    type: Schema.Types.ObjectId, 
    requiered: true,
    ref: "Business"
  }
}, 
  {timestams: true}
);

mongoose.exports = mongoose.model("Queue", queueSchema);