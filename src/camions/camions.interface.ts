import { Document } from 'mongoose';

export interface Camion extends Document{
    readonly numcamion:Number;
    readonly genrecamion:string;
    readonly marquecamion:string;
    readonly modelcamion:string;
}