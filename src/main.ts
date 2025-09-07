import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Đoạn mã sau thiết lập ValidationPipe toàn cục cho ứng dụng NestJS.
  // - whitelist: true => Chỉ cho phép các thuộc tính được định nghĩa trong DTO, loại bỏ các thuộc tính thừa khỏi request.
  // - forbidNonWhitelisted: true => Nếu request chứa thuộc tính không được định nghĩa trong DTO thì sẽ trả về lỗi.
  // - transform: true => Tự động chuyển đổi kiểu dữ liệu của request về đúng kiểu đã khai báo trong DTO.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
