import { Schema } from "mongoose";

export const CamionSchema=new Schema(
    {
        numcamion: {
            type:Number,
            required: true,
        },
        genrecamion: {
            type:String,
            required: true,
        },
        marquecamion: {
            type:String,
            required: true,
        },
        modelcamion:{
            type:String,
            required: true,
        },
    }
)