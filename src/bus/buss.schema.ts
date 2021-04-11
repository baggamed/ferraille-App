import { Schema } from "mongoose";

export const BusSchema=new Schema(
    {
        numbus: {
            type:Number,
            required: true,
        },
        genrebus: {
            type:String,
            required: true,
        },
        marquebus: {
            type:String,
            required: true,
        },
        modelbus:{
            type:String,
            required: true,
        },
    }
)