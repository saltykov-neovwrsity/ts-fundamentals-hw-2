export interface PixabayImage {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
  likes: number;
  views: number;
  comments: number;
  downloads: number;
}

export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
}
