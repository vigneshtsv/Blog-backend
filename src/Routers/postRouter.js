import express from 'express';
import { createPost, deletePost, getAllPost, updatePost } from '../Controllers/postController.js';

const router = express.Router();

router.post('/createpost',createPost);
router.get('/getallpost',getAllPost);
router.put('/updatepost/:id',updatePost);
router.delete('/deletepost/:id',deletePost);


export default router;