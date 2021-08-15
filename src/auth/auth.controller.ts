import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Logindto } from './dto/logindto';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @ApiBody({type: Logindto})
    async login(@Request() req){
        return this.authService.login(req.user);
  }
}
