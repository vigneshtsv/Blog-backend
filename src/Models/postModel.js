import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image:{
        type:String,
        default:"https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png"
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;