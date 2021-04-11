import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports:[
        MongooseModule.forRoot(
            'mongodb://localhost:27017/feraille',
            {
                'useNewUrLParser':true,
                'useFindAndModify':false,
                'useCreateIndex':true
            }
        )
    ],
    exports:[MongooseModule]
})
export class DatabaseModule {}