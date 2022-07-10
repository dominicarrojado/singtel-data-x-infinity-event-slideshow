import React, { ReactNode } from 'react';
import { getAssetUrl } from '../lib/assets';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div
      className="flex flex-col h-full bg-sky-550 bg-bottom bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${getAssetUrl(
          'images/bg-futuristic-fold-with-coconut-trees.svg'
        )})`,
      }}
    >
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
