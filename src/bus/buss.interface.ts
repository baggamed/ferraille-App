import { Document } from 'mongoose';

export interface Bus extends Document{
    readonly numbus:Number;
    readonly genrebus:string;
    readonly marquebus:string;
    readonly modelbus:string;
}