import { ApiProperty } from '@nestjs/swagger';

export class BarcodeDto {
    @ApiProperty({ enum: ['c39', 'c128a', 'c128b', 'c128c', 'i2of5', 'qr-code']})
    type: string;

    @ApiProperty({ enum: ['png', 'jpg']})
    imageType: string;
    
    @ApiProperty()
    value: string;
}