import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema()
export class User {
    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    userName: string;

    @Prop()
    @ApiProperty()
    password: string;

    @Prop()
    @ApiProperty()
    active: boolean;
}
