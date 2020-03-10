import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
  async getBarcode(args, opts): Promise<any> {
    try {
      return await QRCode.toDataURL(args, opts);
    } catch (err) {
      console.error(err)
    }  
  }
}