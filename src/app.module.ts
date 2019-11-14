import { Module, CacheModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'

// import { CacheService, TypeormService, GraphqlService } from './config'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		// GraphQLModule.forRootAsync({
		// 	useClass: GraphqlService,
		// }),
		// TypeOrmModule.forRootAsync({
		// 	useClass: TypeormService,
		// }),
		// CacheModule.registerAsync({
		// 	useClass: CacheService,
		// }),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
