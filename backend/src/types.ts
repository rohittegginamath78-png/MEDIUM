import { any } from "zod";

export type Bindings ={
    DATABASE_URL : string;
    JWT_SECRET : string;
}
export type Variables ={
    user : any
}
