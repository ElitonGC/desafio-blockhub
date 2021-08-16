import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Project {

    @Prop({ type: String, required: true, unique: true })
    @ApiProperty()
    name: string;

    @Prop({ type: String, required: false })
    @ApiProperty()
    description: string;

    @Prop({ type: Date, required: true })
    @ApiProperty()
    beginDate: Date;
    
    @Prop({ type: Date, required: false })
    @ApiProperty()
    endDate: Date;

    @Prop({ type: Boolean, required: false })
    @ApiProperty()
    active: boolean;
}