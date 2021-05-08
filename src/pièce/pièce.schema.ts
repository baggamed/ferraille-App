import { Schema } from "mongoose";

export const PiècesSchema=new Schema(
    {
    
            nom :{
                type: String,
                required: true,
            },
            pieces:{
                type: []
            },
            /*
            signaler:{
                type: Boolean
            }
                */
        
        },

    
)