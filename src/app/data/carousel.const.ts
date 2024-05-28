import { ICarrouselItem } from "../components/project-slider/interface.metadata";

export const CAROUSEL_DATA_ITEMS: ICarrouselItem[] = [
  {
    id: 1,
    title: {
      first: "Innovative",
      second: "Designs"
    },
    subtitle: "Exploring the edge of creative design.",
    link: "https://www.example.com/designs",
    image: "../../assets/img/profile.jpg",
    order: 1,
    urlVideo: "assets/videos/design.mp4",
    description: "Dive into our latest creative design projects that transform ordinary concepts into extraordinary results."
  },
  {
    id: 2,
    title: {
      first: "Advanced",
      second: "Technology"
    },
    subtitle: "Latest tech trends",
    link: "https://www.example.com/technology",
    image: "../../assets/img/profile.jpg",
    order: 2,
    urlVideo: "assets/videos/tech.mp4",
    description: "Stay ahead with cutting-edge technologies that redefine industries and enhance user experiences."
  },
  {
    id: 3,
    title: {
      first: "Eco",
      second: "Solutions"
    },
    subtitle: "Green tech innovations",
    link: "https://www.example.com/eco",
    image: "../../assets/img/profile.jpg",
    order: 3,
    urlVideo: "assets/videos/eco.mp4",
    description: "Explore our sustainable solutions that help conserve the environment and promote green living."
  }
];
