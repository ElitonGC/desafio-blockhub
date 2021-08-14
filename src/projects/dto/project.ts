import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Prop, Schema } from '@nestjs/mongoose';


@Schema()
export class Project {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    @Type(() => Date)
    @IsDate()
    beginDate: Date;
    
    @Prop()
    @Type(() => Date)
    @IsDate()
    endDate: Date;

    @Prop()
    active: boolean;
}