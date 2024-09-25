import { UseGuards } from '@nestjs/common';
import { CustomerService } from 'src/service/customer.service';
import { Customer } from '../models/customer';
import { AuthorizationGuard } from 'src/http/authorization/authorization.guard';
import { AuthUser, CurrentUser } from 'src/http/authorization/current-user';
import {
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { PurchasesService } from 'src/service/purchases.service';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(
    private customerService: CustomerService,
    private purchasesService: PurchasesService,
  ) {}

  @Query(() => Customer)
  @UseGuards(AuthorizationGuard)
  me(@CurrentUser() user: AuthUser) {
    return this.customerService.getCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchasesService.listAllFromCustomer(customer.id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; authUserId: string }) {
    return this.customerService.getCustomerByAuthUserId(reference.authUserId);
  }
}
