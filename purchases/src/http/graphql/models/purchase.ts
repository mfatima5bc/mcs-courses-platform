import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from './product';
import { Customer } from './customer';

enum PurchaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Available purchase statuses',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;

  @Field(() => PurchaseStatus)
  status: PurchaseStatus;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Product)
  product: Product;
  productId: string;

  @Field(() => Customer)
  customer: Customer;
  customerId: string;
}
