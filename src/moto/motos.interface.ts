import { Document } from 'mongoose';

export interface Moto extends Document{
    readonly nummoto:Number;
    readonly genremoto:string;
    readonly marquemoto:string;
    readonly modelmoto:string;
}