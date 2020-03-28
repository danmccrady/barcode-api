import { Controller, Get, Query, Header, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { QrcodeDto } from './dto/QrcodeDto';
import { BarcodeDto } from './dto/BarcodeDto';

@ApiTags('QR Code')
@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('qrcode')
  async getQrcode(@Query() qrcodeDto: QrcodeDto): Promise<any> {
    return await this.appService.getQrcode(qrcodeDto);
  }

  @Get('barcode')
  async getBarcode(@Query() barcodeDto: BarcodeDto): Promise<any> {
    try {
      return "<img src='" + await this.appService.getBarcode(barcodeDto) + "' />";  
    } catch (err) {
      console.error(err);
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: err.message ? err.message : "An unknown error occurred",
        request: barcodeDto,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }  
  }
}
