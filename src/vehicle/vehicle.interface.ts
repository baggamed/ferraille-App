import { Document } from 'mongoose';
import { Pièce } from 'src/pièce/pièce.interface';

export interface Vehicle extends Document{
    readonly id:Number; //id
    readonly marquecar:string;
    readonly modelcar:string;
    readonly type:string;
    readonly pieces:[Pièce];
}