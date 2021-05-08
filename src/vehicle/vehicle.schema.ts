import { Schema } from "mongoose";
import { PiècesSchema } from "src/pièce/pièce.schema";
// const blockSchema = new Schema (
//     {

//         nom :{
//             type:String
//         },
//         pieces:{
//             type:[]
//         }
//     }
// ) 
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
        blocks:{
            // type: blockSchema,
            // ref:'vehicles'
        },

    }
    
)