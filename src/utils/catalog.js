import product1Img from "../assets/img/product-1.jpg";
import product2Img from "../assets/img/product-2.jpg";
import product3Img from "../assets/img/product-3.jpg";
import product4Img from "../assets/img/product-4.jpg";
import product5Img from "../assets/img/product-5.jpg";
import product6Img from "../assets/img/product-6.jpg";
import product7Img from "../assets/img/product-7.jpg";
import product8Img from "../assets/img/product-8.jpg";
import a from "../assets/img/nike1.jpeg";
import b from "../assets/img/nike2.jpeg";
import c from "../assets/img/nike3.jpeg";
import d from "../assets/img/nike4.jpeg";
import f from "../assets/img/nike5.jpeg";
import g from "../assets/img/nike6.jpeg";

export const catalog = [
  {
    id: 1,
    brand: "Zara",
    name: "Camisa Larga com Bolsos",
    price: 159.99,
    image: product1Img,
    feminine: false,
  },
  {
    id: 2,
    brand: "Zara",
    name: "Casaco Reto com Lã",
    price: 539.99,
    image: product2Img,
    feminine: true,
  },
  {
    id: 3,
    brand: "Zara",
    name: "Jaqueta com Efeito Camurça",
    price: 249.99,
    image: product3Img,
    feminine: false,
  },
  {
    id: 4,
    brand: "Zara",
    name: "Sobretudo em Mescla de Lã",
    price: 189.99,
    image: product4Img,
    feminine: false,
  },
  {
    id: 5,
    brand: "Zara",
    name: "Camisa Larga Acolchoada de Veludo Cotelê",
    price: 329.99,
    image: product5Img,
    feminine: false,
  },
  {
    id: 6,
    brand: "Zara",
    name: "Casaco de Lã com Botões",
    price: 429.99,
    image: product6Img,
    feminine: true,
  },
  {
    id: 7,
    brand: "Zara",
    name: "Casaco com Botões",
    price: 799.99,
    image: product7Img,
    feminine: true,
  },
  {
    id: 8,
    brand: "Zara",
    name: "Colete Comprido com Cinto",
    price: 399.99,
    image: product8Img,
    feminine: true,
  },
  {
    id: 9,
    brand: "Nike",
    name: "Camisa Polo NikeCourt Heritage ",
    price: 455.99,
    image: a,
    feminine: false,
  },
  {
    id: 10,
    brand: "Nike",
    name: "Vestido Nike Court Dri-FIT Slam",
    price: 759.99,
    image: b,
    feminine: true,
  },
  {
    id: 11,
    brand: "Nike",
    name: "Camiseta Nike SB Brasil ",
    price: 549.99,
    image: c,
    feminine: false,
  },
  {
    id: 12,
    brand: "Nike",
    name: "Camiseta Nike Sportswear",
    price: 189.99,
    image: d,
    feminine: true,
  },
  {
    id: 13,
    brand: "Nike",
    name: "Camiseta Nike Paris Saint-Germain Crest",
    price: 189.99,
    image: f,
    feminine: false,
  },
  {
    id: 14,
    brand: "Nike",
    name: "Tênis Nike Air Zoom Pegasus",
    price: 1044.99,
    image: g,
    feminine: false,
  },
];

export const catalogIndexedById = catalog.reduce((acc, currentValue) => {
  const { id } = currentValue;
  acc[id] = currentValue;
  return acc;
}, {});
