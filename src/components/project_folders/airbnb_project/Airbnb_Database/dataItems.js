import FirstImage from "../airbnb_img/card-1.jpg";
import SecondImage from "../airbnb_img/card-2.jpg";
import ThirdImage from "../airbnb_img/card-3.jpg";
import FourthImage from "../airbnb_img/card-4.jpg";

const dataItems = [
  {
    id: 1,
    star: "⭐⭐⭐⭐",
    itemRating: "5.0(6) . USA",
    itemName: "French Design Bedrooms",
    itemPrice: "From $136 / Unit",
    image: FirstImage,
    openSpot: 0,
    location: "online",
  },
  {
    id: 2,
    star: "⭐⭐⭐",
    itemRating: "3.0(6) . UAE",
    itemName: "Arabian Design Bedrooms",
    itemPrice: "From $98 / Unit",
    image: SecondImage,
    openSpot: 40,
    location: "online",
  },
  {
    id: 3,
    star: "⭐⭐",
    itemRating: "2.0(6) . Germany",
    itemName: "French Design Bedroomse",
    itemPrice: "From $99 / Unit",
    image: ThirdImage,
    openSpot: 0,
    location: "offline",
  },
  {
    id: 4,
    star: "⭐⭐⭐",
    itemRating: "3.0(6) . Poland",
    itemName: "Eastern Design Bedrooms",
    itemPrice: "From $111 / Unit",
    image: FourthImage,
    openSpot: 22,
    location: "online",
  },
];

export default dataItems;
