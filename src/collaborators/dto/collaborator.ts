import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Collaborator {

    @Prop({ type: String, required: true })
    @ApiProperty()
    name: string;

    @Prop({ type: String, required: true })
    @ApiProperty()
    occupation: string;

    @Prop({ type: Date, required: true })
    @ApiProperty()
    beginDate: Date;

    @Prop({ type: Boolean, required: false })
    @ApiProperty()
    active: boolean;
}