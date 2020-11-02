export interface Book {
  id: number,
  name: string;
  author: string;
  imageUrl?: string;
  isSoldOut: boolean;
}
