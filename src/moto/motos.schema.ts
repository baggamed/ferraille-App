import { Schema } from "mongoose";

export const MotoSchema=new Schema(
    {
        nummoto: {
            type:Number,
            required: true,
        },
        genremoto: {
            type:String,
            required: true,
        },
        marquemoto: {
            type:String,
            required: false,
        },
        modelmoto:{
            type:String,
            required: true,
        },
    }
    
)