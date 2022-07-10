import { getAssetUrl } from './assets';
import { Color, Direction } from './types';

export const SITE_NAME = 'Dominic Arrojado';
export const PROJECT_TITLE =
  'Singtel Data X Infinity Event Slideshow Singapore';
export const MAIN_AUTHOR = 'Dominic Arrojado';
export const MAIN_TITLE = `${PROJECT_TITLE} | ${SITE_NAME}`;
export const MAIN_DESC =
  'Infinite possibilities. Infinite data. Singtel introduces Data X Infinity. Get unlimited data for a flat flee of $39.90/mth! Submit an entry and let us know what you would do with all that data!';
export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/singtel-data-x-infinity-event-slideshow/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const META_IMAGE = `${MAIN_URL}images/screenshot.png`;
export const META_IMAGE_WIDTH = 2880;
export const META_IMAGE_HEIGHT = 1800;
export const META_IMAGE_ALT = 'Singtel Data X Infinity Event Slideshow';
export const META_IMAGE_TYPE = 'image/png';

export const APP_URL = `${MAIN_ORIGIN}/singtel-data-x-infinity-event-app/`;

export const ENTRIES_PER_PAGE = 18;
export const ENTRY_IMAGE_SIZE = 345;
export const ENTRY_BG_COLORS = Object.values(Color);
export const ENTRY_BG_COLORS_LENGTH = ENTRY_BG_COLORS.length;
export const ENTRY_BG_DIRECTIONS = Object.values(Direction);
export const ENTRY_BG_DIRECTIONS_LENGTH = ENTRY_BG_DIRECTIONS.length;
export const ENTRY_ANIM_DELAY_MAX_SECONDS = 16;

export const IMAGE_GENERATED_TYPE = 'image/png';

export const FONTS = ['MyriadPro-Regular'];

export const STICKERS = [
  getAssetUrl('images/sticker-1-party-dinosaur.png'),
  getAssetUrl('images/sticker-2-ring-planet.png'),
  getAssetUrl('images/sticker-3-athletic-fox.png'),
  getAssetUrl('images/sticker-4-cute-clam.png'),
];
export const STICKERS_LENGTH = STICKERS.length;

export const SLIDESHOW_INTERVAL = 40;
export const SLIDESHOW_MAX_ENTRIES = ENTRIES_PER_PAGE * 10;
export const SLIDESHOW_LOAD_MORE_THRESHOLD = 0.8;
