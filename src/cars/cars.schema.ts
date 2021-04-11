import { Schema } from "mongoose";
import { PiècesSchema } from "src/pièce/pièce.schema";

export const CarSchema=new Schema(
    {
        numcar: {
            type:Number,
            required: true,
        },
        genrecar: {
            type:String,
            required: true,
        },
        marquecar: {
            type:String,
            required: true,
        },
        modelcar:{
            type:String,
            required: true,
        },
        pieces:{
            type:[PiècesSchema],
            ref:'cars'
        },
    }
    
)