import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema()
export class Relationship {

    @Prop({ type: String, required: true })
    @ApiProperty()
    idProject: string;

    @Prop({ type: String, required: true })
    @ApiProperty()
    idCollaborator: string;

    @Prop({ type: Date, required: true })
    @ApiProperty()
    beginDate: Date;
    
    @Prop({ type: Date, required: false })
    @ApiProperty()
    endDate: Date;
}