import MountFuji from "../travel_journal_img/Mount_Fuji.jpg";
import SydneyOperaHouse from "../travel_journal_img/Sydney_Opera_House.jpg";
import MountKilimanjaro from "../travel_journal_img/Mount_Kilimanjaro.jpg";
import EiffelTower from "../travel_journal_img/Eiffel_Tower.jpg";

const dataItems = [
  {
    id: 1,
    title: "Mount Fuji",
    location: "JAPAN",
    bingMapLink:
      "https://www.bing.com/maps?&ty=18&q=Mount%20Fuji&satid=id.sid%3A9f6975a7-8d42-4eea-727d-f9858f83d304&ppois=35.35749816894531_138.73056030273438_Mount%20Fuji_~&cp=35.357498~138.73056&v=2&sV=1",
    startDate: "25th December 2021",
    endDate: "28th December 2021",
    description:
      "Mount Fuji, or Fugaku, located on the island of Honshū, is the highest mountain in Japan, standing 3,776.24 m. It is the second-highest volcano located on an island in Asia, and seventh-highest peak of an island on Earth. Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708. The mountain is located about 100 km southwest of Tokyo and is visible from there on clear days.",
    imageURL: MountFuji,
  },
  {
    id: 2,
    title: "Sydney Opera House",
    location: "AUSTRALIA",
    bingMapLink: "https://www.bing.com/maps?q=sydney+opera+house&FORM=HDRSC4",
    startDate: "29th December 2021",
    endDate: "1st January 2022",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th century architecture.",
    imageURL: SydneyOperaHouse,
  },
  {
    id: 3,
    title: "Mount Kilimanjaro",
    location: "TANZANIA",
    bingMapLink:
      "https://www.bing.com/maps?q=Mount+Kilimanjaro%2c+Siha%2c+Kilimanjaro%2c+Tanzania&FORM=HDRSC4",
    startDate: "3rd January 2022",
    endDate: "6th January 2022",
    description:
      "Mount Kilimanjaro is a dormant volcano in Tanzania. It has three volcanic cones: Kibo, Mawenzi, and Shira. It is the highest mountain in Africa and the highest single free-standing mountain above sea level in the world: 5,895 metres above sea level and about 4,900 metres above its plateau base. It is the highest volcano in Africa and the Eastern Hemisphere.",
    imageURL: MountKilimanjaro,
  },
  {
    id: 4,
    title: "Eiffel Tower",
    location: "FRANCE",
    bingMapLink: "https://www.bing.com/maps?q=eiffel+tower&FORM=HDRSC4",
    startDate: "8th January 2022",
    endDate: "11th January 2022",
    description:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France, constructed from 1887 to 1889. It is named after engineer Gustave Eiffel, whose company designed and built the tower. it is the most visited monument with an entrance fee in the world; 6.91 million people ascended it in 2015.",
    imageURL: EiffelTower,
  },
];

export default dataItems;

/* 
 {
    id: 2,
    title: "",
    location: "",
    bingMapLink: "",
    startDate: "",
    endDate: "",
    description: "",
    imageURL: "",
  },

*/
