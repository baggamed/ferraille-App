import {Document} from 'mongoose';

export interface Pièce extends Document{
    readonly nompiece:String,
    readonly classpièce:string,
    readonly block:string,
    readonly étatpièce:string,
}