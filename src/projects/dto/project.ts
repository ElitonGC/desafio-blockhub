import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';


@Schema()
export class Project {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    description: string;

    @Prop()
    @Type(() => Date)
    @IsDate()
    @ApiProperty()
    beginDate: Date;
    
    @Prop()
    @Type(() => Date)
    @IsDate()
    @ApiProperty()
    endDate: Date;

    @Prop()
    @ApiProperty()
    active: boolean;
}