import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate } from "class-validator";

@Schema()
export class Collaborator {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    occupation: string;

    @Prop()
    @Type(() => Date)
    @IsDate()
    @ApiProperty()
    beginDate: Date;

    @Prop()
    @ApiProperty()
    active: boolean;
}