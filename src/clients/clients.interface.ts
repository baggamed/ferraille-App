import {Document} from 'mongoose';

export interface Client extends Document{
    readonly id:string,
    readonly nomclient:string,
    readonly prenomclient:string,
    readonly numtelclient:number,
    readonly emailclient:string
}