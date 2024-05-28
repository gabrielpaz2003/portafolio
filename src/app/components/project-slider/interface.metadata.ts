export interface ICarrouselItem {
  id: number;
  title?:{
    first: string;
    second: string;
  }
  subtitle?: string;
  link?: string;
  image: string;
  order: number;
  marginLeft?: number;
  urlVideo?: string;
  description?: string;
}
