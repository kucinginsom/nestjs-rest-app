import { Injectable } from '@nestjs/common';
type InfoType = {
  name: string;
  description: string;
};
@Injectable()
export class AppService {
  info(): InfoType {
    return {
      name: 'nestjs-rest-app',
      description: 'Hello World'
    };
  }
}
