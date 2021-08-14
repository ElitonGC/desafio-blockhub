import { Prop, Schema } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { IsDate } from "class-validator";

@Schema()
export class Collaborator {
    @Prop()
    name: string;

    @Prop()
    occupation: string;

    @Prop()
    @Type(() => Date)
    @IsDate()
    beginDate: Date;

    @Prop()
    active: boolean;
}