import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BarcodeDto {
    @ApiProperty({ enum: ['c39', 'c128a', 'c128b', 'c128c', 'i2of5', 'qr']})
    type: string;

    @ApiPropertyOptional({
        minimum: 0
      })
    scale: number;

    @ApiPropertyOptional({
        description: 'Bar height, in millimeters.',
        minimum: 0,
        default: 10
      })
    height: number;
    
    @ApiPropertyOptional({
      description: "Show human-readable text.",
      default: true
    })
    includeText: boolean;

    @ApiProperty()
    value: string;
}