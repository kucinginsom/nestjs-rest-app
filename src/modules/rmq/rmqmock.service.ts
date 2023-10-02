import { ClientProxy } from '@nestjs/microservices';

export class MockRabbitMQService {
  constructor(private readonly client: ClientProxy) {}

  // Define your methods used in RabbitMQService
  // For example:
  public async sendAccountCreationEvent(
    pattern: string,
    email: string,
    data: any,
  ) {
    await this.client
      .emit(pattern, data)
      .toPromise()
      .then(() => {
        console.log(
          `Send account creation event for user <${email}> has succeeded!`,
        );
      })
      .catch((error) => {
        console.log(
          `Send account creation event for user <${email}> has failed! [${JSON.stringify(
            error,
          )}]`,
        );
      });
  }
}

export const createMockRabbitMQService = (): MockRabbitMQService => {
  const clientProxy = {
    // Mock the methods used by your service
    emit: jest.fn(),
  } as unknown as ClientProxy;

  return new MockRabbitMQService(clientProxy);
};