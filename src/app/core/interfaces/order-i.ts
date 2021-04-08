import { StateOrder } from '../enums/state-order.enum';

export interface OrderI {
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
  total(val: number, coef: number, tva?: number): number;
}
