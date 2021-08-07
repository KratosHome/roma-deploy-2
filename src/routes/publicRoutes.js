import { MainPage, PassengerPage, BusPage, DriverPage, TransferPage } from '../components';
import { Contacts } from '../pages';
import {
  MAIN_ROUTE,
  PASSENGER_ROUTE,
  BUS_ROUTE,
  DRIVER_ROUTE,
  TRANSFER_ROUTE,
  CONTACTS_ROUTE,
} from '../utils/constants';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: PASSENGER_ROUTE,
    Component: PassengerPage,
  },
  {
    path: BUS_ROUTE,
    Component: BusPage,
  },
  {
    path: DRIVER_ROUTE,
    Component: DriverPage,
  },
  {
    path: TRANSFER_ROUTE,
    Component: TransferPage,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
];