import { AppProps } from 'next/app';
import '@/styles/global.scss';
import { ToastProvider } from 'react-toast-notifications';
import { StoreProvider } from '../store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={2000}
        placement="bottom-right"
      >
        <Component {...pageProps} />;
      </ToastProvider>
    </StoreProvider>
  );
}
