import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../components/home'));

export default function Page() {
  return <HomePage />;
}
