import { Schema} from "mongoose";

export const CommandsSchema = new Schema(
    {
        numcomm: {
            type : Number,
            required : true,
        },
        datecomm: {
            type : Date,
            required : true , 
        },
        prixcomm: {
            type: Number,
            required : true ,
        },
    }
)