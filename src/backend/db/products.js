import { v4 as uuid } from "uuid";
import ather from '../../assets/images/backendImage/ather.webp';
import bounceInfinity from '../../assets/images/backendImage/bounceInfinity.webp';
import heroFlash from '../../assets/images/backendImage/heroFlash.jpg';
import komaki from '../../assets/images/backendImage/komaki_Ranger.webp';
import obenRorr from '../../assets/images/backendImage/oben_rorr.webp';
import olasS1 from '../../assets/images/backendImage/olaS1.webp';
import revolt400 from '../../assets/images/backendImage/revoltRV400.webp';
import simpleEnergy from '../../assets/images/backendImage/simpleEnergy.webp';
import torkKratos from '../../assets/images/backendImage/tork_Kratos.webp';
import tvs from '../../assets/images/backendImage/tvs.webp';



/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
     name: "Revolt RV400",
     image: revolt400,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 75999,
     category: "bike",
     rating: 4,
  },
  {
    _id: uuid(),
     name: "Ola S1",
     image: olasS1,
     version: "VDI BS IV",
     speed: 100,
     engine_type: "semi automatic",
     variant: "Electric",
     emi: 4333,
     price: 65999,
     category: "scooter",
     rating: 1,
  },
  {
    _id: uuid(),
     name: "Ather 450X",
     image: ather,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 92199,
     category: "scooter",
     rating: 2,
  },
  {
    _id: uuid(),
     name: "Simple Energy One",
     image: simpleEnergy,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 54999,
     category: "scooter",
     rating: 5,
  },
  {
    _id: uuid(),
     name: "Bounce infinity E1",
     image: bounceInfinity,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 58099,
     category: "scooter",
     rating: 3,
  },
  {
    _id: uuid(),
     name: "Oben Rorr",
     image: obenRorr,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 58099,
     category: "bike",
     rating: 4,
  },
  {
    _id: uuid(),
     name: "Tork Kratos",
     image: torkKratos,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 72000,
     category: "bike",
     rating: 1,
  },
  {
    _id: uuid(),
     name: "Komaki Ranger",
     image: komaki,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 98000,
     category: "bike",
     rating: 2,
  },
  {
    _id: uuid(),
     name: "Hero Electric Flash",
     image: heroFlash,
     version: "VDI BS VI",
     speed: 100,
     engine_type: "Automatic",
     variant: "Electric",
     emi: 4333,
     price: 150999,
     category: "scooter",
     rating: 5,
     
  },
];
