import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbExceptionHandler } from './util/db-exception.handler';
import { Product, Store } from './entities';

const entities = [ Product, Store ];

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, DbExceptionHandler],
  imports: [TypeOrmModule.forFeature(entities)]
})
export class ProductsModule {}
