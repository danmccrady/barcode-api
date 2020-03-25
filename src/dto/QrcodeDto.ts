import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class QrcodeDto {
    @ApiProperty({ enum: ['png', 'jpeg']})
    imageType: string;

    @ApiPropertyOptional({
        description: `Forces a specific width for the output image.
            If width is too small to contain the qr symbol, this option will be ignored.
            Takes precedence over scale.`,
        minimum: 0
      })
    width: number;

    @ApiPropertyOptional({
        description: 'Define how wide the quiet zone should be.',
        minimum: 0,
        default: 1
      })
    margin: number;
    
    @ApiProperty()
    value: string;
}