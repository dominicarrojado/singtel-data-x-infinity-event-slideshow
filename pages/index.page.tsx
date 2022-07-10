import cn from 'classnames';
import Slideshow from '../components/slideshow';
import Warning from '../components/warning';

export default function Home() {
  return (
    <div
      className={cn('w-full h-full flex gap-[20px] p-[20px]', 'sm:p-[40px]')}
    >
      <Slideshow />
      <Warning />
    </div>
  );
}
