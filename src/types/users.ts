import { Post } from "./posts"

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
   street: string,
   suite: string,
   city: string,
   zipcode: string
   geo: {
      lat: string,
      lng: string
   }
  } 
  phone: string,
  website: string
  company: {
   name: string,
   catchPhrase: string,
   bs: string
  }
}
export interface OnePost {
  post: Post,
  madeby: User 
}
export interface OneUser {
  user: User,
  postsLength: number
}