import { Document } from 'mongoose';
import { Pièce } from 'src/pièce/pièce.interface';

export interface Car extends Document{
    readonly numcar:Number; //id
    readonly genrecar:string; //deleted
    readonly marquecar:string;
    readonly modelcar:string;
    readonly type:string;
    readonly pieces:[Pièce];
}