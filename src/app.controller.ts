import { Controller, Get, Query, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { BarcodeDto } from './dto/BarcodeDto';

@ApiTags('Barcode')
@Controller('v1/barcode')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@Header('content-type', 'image/png')
  async getBarcode(@Query() barcodeDto: BarcodeDto): Promise<any> {
    var opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.3,
      margin: 1,
      color: {
        dark:"#010599FF",
        light:"#FFBF60FF"
      }
    }
     
    return '<img src="' + await this.appService.getBarcode('sdfasdsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasasdfasdffasdf', opts) + '">';
  }
}
