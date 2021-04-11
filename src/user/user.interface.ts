import {Document} from 'mongoose';

export interface User extends Document{
    readonly email:string,
    readonly password:string,
    readonly username:string,
    readonly firstname:string,
    readonly lastname:string,
    readonly type:string,
    readonly photo:string,
    readonly adresse:string,
    readonly phonenumber:number,
}