import { Schema } from "mongoose";
export const All_VehicleSchema=new Schema(
    
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
        blocks:{
            // type: blockSchema,
            // ref:'vehicles'
        },

    }
    
)