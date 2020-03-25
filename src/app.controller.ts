import { Controller, Get, Query, Header } from '@nestjs/common';
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
    return "<img src='" + await this.appService.getBarcode(barcodeDto) + "' />";
  }
}
