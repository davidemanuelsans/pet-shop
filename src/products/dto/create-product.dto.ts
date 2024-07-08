import { Expose } from "class-transformer";
import { IsArray, IsIn, IsInt, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    title: string;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    slug?: string;

    @IsInt()
    @IsPositive()
    @IsOptional()
    stock?: number;

    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    @IsArray()
    sizes: string[];

    @IsIn(['male', 'female'])
    gender: string;

    @IsJSON()
    extraData: Object
}
