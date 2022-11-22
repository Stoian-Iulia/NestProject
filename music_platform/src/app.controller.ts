/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
@Controller('/api')
export class AppController {
    @Get()
    gwtUsers() {
        return 'GET ALL USERS'
    }
}
