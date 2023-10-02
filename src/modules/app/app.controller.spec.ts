import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('info', () => {
    it('should return an object with name and description', () => {
      const result = appService.info();
      expect(result).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
        }),
      );
    });
  });
});
