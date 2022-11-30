import { Post } from "./posts";
import { User } from "./users";

export interface SingleUser {
   post: Post,
   madeby: User 
}