import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { QrcodeDto } from './dto/QrcodeDto';
import { BarcodeDto } from './dto/BarcodeDto';

@Injectable()
export class AppService {
  async getQrcode(args: QrcodeDto): Promise<any> {
    try {
      return await QRCode.toDataURL(args.value, 
        {
          errorCorrectionLevel: 'H',
          type: (args.imageType == "png" ? 'image/png' : 'image/jpeg'),
          width: args.width ? args.width : 400,
          margin: args.margin ? args.margin : 1,
          color: {
            dark:"#000000ff",
            light:"#ffffffff"
          }
        });
    } catch (err) {
      console.error(err)
    }  
  }

  async getBarcode(args: BarcodeDto): Promise<any> {
    try {
      /*return await QRCode.toDataURL(args.value, 
        {
          errorCorrectionLevel: 'H',
          type: (args.imageType == "png" ? 'image/png' : 'image/jpeg'),
          width: args.width ? args.width : 400,
          margin: args.margin ? args.margin : 1,
          color: {
            dark:"#000000ff",
            light:"#ffffffff"
          }
        });*/

      return await new Promise((resolve, reject) => {
        const bwipjs = require('bwip-js');
          
        bwipjs.toBuffer({
              bcid: args.type,
              text: args.value,
              scale: args.scale ? args.scale : 3,
              height: args.height ? args.height : 10,
              includetext: args.includeText ? args.includeText : true,
              textxalign: 'center'
          }, function(error, buffer) {
              if(error) {
                  reject(error)
              } else {
                  let gifBase64 = `data:image/gif;base64,${buffer.toString('base64')}`
                  resolve(gifBase64)
              }
          })
      })
    } catch (err) {
      console.error(err)
    }  
  }
}