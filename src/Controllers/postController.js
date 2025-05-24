import Post from "../Models/postModel.js";

export const createPost = async (req, res, next) => {
    if (!req.body.title || !req.body.content) {
        return next(errorHandler(403, "All the fields are required"));
    }

    const { title, content, category } = req.body;
    const newPost = new Post({ title, content, category });

    try {
        const savedPost = await newPost.save();
        res.status(200).json({
            message: "Post Created Successfully",
            result: savedPost,
        });
    } catch (error) {
        next(error);
    }
};

export const getAllPost = async (req, res, next) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  };

export const updatePost = async (req,res,next) => {
    const { id } = req.params;
    const { title, content, category } = req.body;

    if (!title || !content) {
        return next(errorHandler(403, "All the fields are required"));
    }

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, content, category },
            { new: true }
        );
        res.status(200).json({
            message: "Post Updated Successfully",
            result: updatedPost,
        });
    } catch (error) {
        next(error);
    }
}  

export const deletePost = async (req,res,next) => {
    const { id } = req.params;

    try {
        await Post.findByIdAndDelete(id);
        res.status(200).json({
            message: "Post Deleted Successfully",
        });
    } catch (error) {
        next(error);
    }
}
