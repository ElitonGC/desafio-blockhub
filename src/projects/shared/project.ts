import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class Project {
    id: number;
    name: string;
    description: string;
    @Type(() => Date)
    @IsDate()
    beginDate: Date;
    @Type(() => Date)
    @IsDate()
    endDate: Date;
    active: boolean;
}
