import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [
    UsersModule,
    TweetModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        autoLoadEntities: true,
        port: 5438,
        username: 'nestjs',
        password: 'nestjs',
        database: 'nestjs',
        synchronize: true,
      }),
    }),
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
