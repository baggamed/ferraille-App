import { Schema } from "mongoose";

export const UsersSchema=new Schema(
    {
        email: {
            type:String,
            required: true,
        },
        password: {
            type:String,
            required: true,
        },
        username: {
            type:String,
            required: true,
        },
        firstname:{
            type:String,
            required: false,
        },
        lastname:{
            type:String,
            required: false,
        },
        type:{
            type:String,
            required: false,
        },photo:{
            type:String,
            required: false,
        },
        adresse:{
            type:String,
            required: false,
        },
        phonenumber:{
            type:Number,
            required: false,
        },
    }
    
)