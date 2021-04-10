import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { StoreProvider } from '../store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}
