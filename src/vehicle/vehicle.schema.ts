import { Schema } from "mongoose";
import { PiècesSchema } from "src/pièce/pièce.schema";

export const VehicleSchema=new Schema(
    {
        id: {
            type:Number,
            required: true,
        },
        marquecar: {
            type:String,
            required: true,
        },
        modelcar: {
            type:String,
            required: false,
        },
        type:{
            type:String,
            required: true,
        },
        pieces:{
            type:[PiècesSchema],
            ref:'vehicles'
        },

    }
    
)