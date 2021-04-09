import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCommentComponent } from './components/order-comment/order-comment.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  {
    path: '',
    component: PageListOrdersComponent,
    children: [
      { path: '', redirectTo: 'detail', pathMatch: 'full' },
      { path: 'detail', component: OrderDetailComponent },
      { path: 'comment', component: OrderCommentComponent },
    ],
  },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit/:id', component: PageEditOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
