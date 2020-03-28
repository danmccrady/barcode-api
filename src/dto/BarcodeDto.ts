import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BarcodeDto {
    @ApiProperty({ enum: ['code39', 'code128', 'interleaved2of5', 'ean13', 'upca']})
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