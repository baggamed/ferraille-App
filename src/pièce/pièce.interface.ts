import {Document} from 'mongoose';

export interface Pièce extends Document{
    readonly nom:String,
    readonly pieces:[],
    /*readonly signaler:Boolean*/
}