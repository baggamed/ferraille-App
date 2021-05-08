import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel, MongooseModule } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.interface";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('users')
        private readonly usersModel: Model<User>
    ) { }
    async findOne(criteria, select: any = {}): Promise<User> {
        return await this.usersModel.findOne(criteria, select).exec();
    }
    async findAll(criteria = {}, select: any = {}): Promise<User[]> {
        return await this.usersModel.find(criteria, select).exec();
    }
    /* async find():Promise<User[]>{
         return await this.usersModel.find().exec()
     }
     */
    async create(userDto): Promise<User> {
        const user = await this.usersModel.create(userDto)
        return user;
    }/*
    public  async deleteUserById(username:string){
        const user= this.usersModel.deleteOne({username}).exec();
        if ((await user).deletedCount===0){
            throw new HttpException('Not found',404);
        }
        return user;}*/
    async update(id: string, updateUserDto: any): Promise<any> {
        return await this.usersModel.findByIdAndUpdate(id, { $set: updateUserDto },
            { new: true },
            (error: any, model: any) => {
                if (error != null) { console.error('ModelsService', 'update', 'error', error); }
                else { console.info('ModelsService', 'update', 'model', model); }
            });
    }

}