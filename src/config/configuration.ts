import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export default () => ({

  APP_NAME: configService.get<string>('APP_NAME'),
  APP_ENV: configService.get<string>('APP_ENV'),
  PORT: configService.get<number>('PORT'),
  DB_URL: configService.get<string>('DB_URL'),
  MAIL_HOST: configService.get<string>('MAIL_HOST'),
  MAIL_PORT: configService.get<number>('MAIL_PORT'),
  MAIL_IGNORE_TLS: configService.get<boolean>('MAIL_IGNORE_TLS'),
  MAIL_SECURE: configService.get<boolean>('MAIL_SECURE'),
  MAIL_USERNAME: configService.get<string>('MAIL_USERNAME'),
  MAIL_PASSWORD: configService.get<string>('MAIL_PASSWORD'),
  MAIL_FROM_ADDRESS: configService.get<string>('MAIL_FROM_ADDRESS'),
  MAIL_FROM_NAME: configService.get<string>('MAIL_FROM_NAME'),
  RMQ_PRODUCER_QUEUE: configService.get<string>('RMQ_PRODUCER_QUEUE'),
  RMQ_PRODUCER_URL: configService.get<string>('RMQ_PRODUCER_URL'),
  RMQ_PRODUCER_QUEUE_DURABLE: configService.get<boolean>(
    'RMQ_PRODUCER_QUEUE_DURABLE'
  ),
});
