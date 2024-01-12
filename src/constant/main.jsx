// PHOTOS
import img01 from "../assets/img01.webp";
import img02 from "../assets/img02.webp";
import img03 from "../assets/img03.webp";

// VAPES
import ice_mint from "../assets/vapes/ice_mint.webp";
import black_ice from "../assets/vapes/black_ice.webp";
import perch_ice from "../assets/vapes/perch_ice.webp";
import strawberry from "../assets/vapes/strawberry.webp";
import blueberry_ice from "../assets/vapes/blueberry_ice.webp";
import strawberry_banana from "../assets/vapes/strawberry_banana.webp";

export const NAV_OPTIONS = [
  { id: 1, href: "#home", text: "HOME", url: "" },
  { id: 2, href: "#about", text: "ABOUT", url: "" },
  { id: 3, href: "#products", text: "PRODUCTS", url: "" },
  { id: 4, href: "#testimonials", text: "TESTIMONIALS", url: "" },
  { id: 5, href: "#dealers", text: "DEALERS", url: "" },
  // { id: 5, href: "#authentication", text: "AUTHENTICATION", url: "" },
];

export const PRODUCTS = [
  {
    id: "01",
    name: "BLACK ICE",
    bgColor: "#292927",
    textColor: "#fff",
    className: "black_ice",
    img: black_ice,
  },
  {
    id: "02",
    name: "ICE MINT",
    bgColor: "#9af96d",
    textColor: "#fff",
    className: "ice_mint",
    img: ice_mint,
  },
  {
    id: "03",
    name: "BLUEBERRY",
    bgColor: "#017ef4",
    textColor: "#fff",
    className: "blueberry",
    img: blueberry_ice,
  },
  {
    id: "04",
    name: "STARWBERRY WATERMELON",
    bgColor: "#d40000",
    textColor: "#fff",
    className: "starwberry_watermelon",
    img: strawberry,
  },
  {
    id: "05",
    name: "STARWBERRY BANANA",
    bgColor: "#f2f427",
    textColor: "#fff",
    className: "starwberry",
    img: strawberry_banana,
  },
  {
    id: "06",
    name: "PEACH ICE",
    bgColor: "#fba400",
    textColor: "#fff",
    className: "peach_ice",
    img: perch_ice,
  },
];

export const TESTIMONIALS = [
  {
    url: img01,
    caption: "Slide 1",
  },
  {
    url: img02,
    caption: "Slide 2",
  },
  {
    url: img03,
    caption: "Slide 3",
  },
];
