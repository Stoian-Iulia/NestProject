/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('/tracks')
export class TrackController {
    create() {

    }
    @Get()
    getAll() {
        return 'WORK'
    }
    getOne() {

    }
    delete() {
        
    }
}