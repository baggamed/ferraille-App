import {Schema} from "mongoose";

export const ClientSchema = new Schema(
    {
        id : {
            type : String,
            required : true,
        },
        nomclient: {
            type:String,
            required: true,
        },
        prenomclient:{
            type:String,
            required:true,
        },
        numtelclient:{
            type: Number,
            required: true,
        },
        emailclient:{
            type:String,
            required:true,
        }

    }
)