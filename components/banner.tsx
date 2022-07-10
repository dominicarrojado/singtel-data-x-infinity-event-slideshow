import React from 'react';
import { getAssetUrl } from '../lib/assets';
import { APP_URL, MAIN_DESC } from '../lib/constants';

export default function Banner() {
  return (
    <a href={APP_URL} className="h-full">
      <img
        src={getAssetUrl('images/banner-data-x-infinity-event.svg')}
        alt={MAIN_DESC}
        width="652"
        height="985"
        className="w-full h-full aspect-[652/985]"
      />
    </a>
  );
}
