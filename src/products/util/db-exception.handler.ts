import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

@Injectable()
export class DbExceptionHandler {
    handle(error: any, logger: Logger) {
        if (error.code === '23505') {
            logger.error(error);
            throw new BadRequestException(error.detail);
        }

        logger.error(error);
        throw new InternalServerErrorException('Something failed');
    }
}