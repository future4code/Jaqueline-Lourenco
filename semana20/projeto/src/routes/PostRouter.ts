import express from 'express';
import { PostBusiness } from '../business/post/PostBusiness';
import { PostController } from '../controller/PostController';
import { SQLPostDatabase } from '../data/SQLPostDatabase';

export const postRouter = express.Router();

const postDatabase = new SQLPostDatabase();
const postBusiness = new PostBusiness(postDatabase);
const postController = new PostController(postBusiness);

postRouter.get("/:id", (req,res) => postController.findPostById(req,res));

postRouter.post("/create", (req,res) => postController.create(req,res));