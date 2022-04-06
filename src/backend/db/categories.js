import { v4 as uuid } from "uuid";
import ather from '../../assets/images/backendImage/ather.webp';
import obenRorr from '../../assets/images/backendImage/oben_rorr.webp';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Scooter",
    image: ather ,
    type: 'FROM_CATEGORY_SCOOTER',
  },
  {
    _id: uuid(),
    categoryName: "Bikes",
    image: obenRorr,
    type: 'FROM_CATEGORY_BIKE',
  },
];
