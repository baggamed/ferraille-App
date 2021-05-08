import { Document } from 'mongoose';

export interface All_Vehicle extends Document{
    readonly id:Number; //id
    readonly marquecar:string;
    readonly modelcar:string;
    readonly type:string;
    readonly blocks:any;
}