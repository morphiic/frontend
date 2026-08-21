import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const PAYPAL_CLIENT_ID = 'BAAsLEfEOt0Gv_380gVClzcUgNYQdvV53QnjwW2uzzirHxIHgTNz0pirThLXHNNWt1zbSrjELbg9Kqnc0k';

export function PayPalProvider({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: PAYPAL_CLIENT_ID,
        currency: 'USD',
        intent: 'capture',
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
