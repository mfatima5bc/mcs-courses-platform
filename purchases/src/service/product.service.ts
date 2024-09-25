import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/database/prisma/prisma.service';

interface createProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }

  async createProduct({ title }: createProductParams) {
    const slug = slugify(title, { lower: true });

    const alreadyExists = await this.prisma.product.findUnique({
      where: {
        slug,
      },
    });

    if (alreadyExists) {
      throw new Error('Another product with same slug already exists.');
    }

    return this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }

  findProductById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }
}
