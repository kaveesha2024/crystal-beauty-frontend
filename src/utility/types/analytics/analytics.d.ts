import type { IAllProductsTypes } from '../getProducts/getProducts';
import type { IAllOrdersTypes } from '../order/order';
import { IGetAllUsersResponseTypes } from './../getAllUsers/getAllUsers.d';
export interface IAnalyticsSectionPropTypes {
    numberOfProducts?: number;
    numberOfUsers?: number;
    numberOfOrders?: number;
    latestUsers: IGetAllUsersResponseTypes[];
    latestOrders: IAllOrdersTypes[];
    latestProducts: IAllProductsTypes[];
}
export interface IAnalitics {
    numberOfOrders: number;
    numberOfProducts: number;
    numberOfUsers: number;
    latestUsers: IGetAllUsersResponseTypes[];
    latestOrders: IAllOrdersTypes[];
    latestProducts: IAllProductsTypes[];
}
