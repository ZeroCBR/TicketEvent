export interface EvenListResponse{
  page:Page;
  _embedded:Embedded;
  _links:Object;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface Embedded {
  events: TicketEvent[];
}

export interface TicketEvent {
  name: string;
  type: string;
  id: string;
  url: string;
  locale: string;
  images: Image[];
  info: string;
  pleaseNote: string;
}

export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}