import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class User {
    @Prop({ type: String, required: true })
    @ApiProperty()
    name: string;

    @Prop({ type: String, required: true, unique: true })
    @ApiProperty()
    userName: string;

    @Prop({ type: String, required: true })
    @ApiProperty()
    password: string;

    @Prop({ type: Boolean, required: false })
    @ApiProperty()
    active: boolean;
}