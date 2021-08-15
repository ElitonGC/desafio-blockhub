import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    userName: string;

    @Prop()
    password: string;

    @Prop()
    active: boolean;
}
