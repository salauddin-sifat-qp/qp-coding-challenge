import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getMessage() {
    return {
      message: 'I can see you 👀',
      timestamp: new Date().toISOString(),
    };
  }
}
