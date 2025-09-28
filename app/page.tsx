import { Button } from '@/components/shared/button';
import ROUTES from '@/constants/routes';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button variant={'outline'}>
        <Link href={ROUTES.PRODCUTS}>Go to products</Link>
      </Button>
    </>
  );
};

export default Home;
