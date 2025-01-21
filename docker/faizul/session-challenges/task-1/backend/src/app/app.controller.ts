import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHelloResponseDto } from './dtos/get-hello-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHelloResponseDto {
    return new GetHelloResponseDto(this.appService.getHello());
  }
}
