export enum FetchState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum Color {
  SKY = 'sky',
  PINK = 'pink',
}

export enum Direction {
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
  LEFT = 'left',
}

export type Entry = {
  imageUrl: string;
  name: string;
  message: string;
  bgColor: Color;
  bgDirection: Direction;
  animationDelay: number;
};
