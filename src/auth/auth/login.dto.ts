import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsOptional } from 'class-validator';

export class LoginDto {
  @IsDefined()
  @IsEmail({}, { message: 'Укажите корректный маил'})
  @ApiProperty({ type: String, required: true })
  email: string;

  @IsDefined()
  @ApiProperty({ type: String, required: true })
  password: string;

  @IsOptional()
  @ApiProperty()
  @ApiPropertyOptional()
  confirm: string;
}
