import { Schema } from "mongoose";

export const PiècesSchema=new Schema(
    {
        nompiece: {
            type:String,
            required: true,
        },
        classpiece: {
            type:String,
            required: true,
        },
        block: {
            type:String,
            required: true,
        },
        étatpiece:{
            type:String,
            required: true,
        },
    }
    
)