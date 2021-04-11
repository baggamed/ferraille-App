import { Document } from "mongoose" ;
export interface Command extends Document {
    readonly numcomm:Number; 
    readonly datecomm:Date;
    readonly prixcomm:number;
}
