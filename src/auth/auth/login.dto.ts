import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ type: String, required: true })
  email: string;

  @ApiProperty({ type: String, required: true })
  password: string;

  @ApiProperty()
  @ApiPropertyOptional()
  confirm?: string;
}
