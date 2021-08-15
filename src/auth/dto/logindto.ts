import { ApiProperty } from "@nestjs/swagger";

export class Logindto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}