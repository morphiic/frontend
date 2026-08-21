import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

type Props = {
  open: boolean;
  onClose: () => void;
  planName: string;
  amount: number;
  currency: string;
};

export function PaymentPopup({ open, onClose, planName, amount, currency }: Props) {
  const [{ isPending: paypalLoading }] = usePayPalScriptReducer();
  const [processing, setProcessing] = useState(false);

  const handleClose = () => {
    setProcessing(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-base-950/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-xl border border-base-400/60 bg-base-800 p-6 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 rounded-md p-1 text-ink-400 transition-colors hover:bg-base-700 hover:text-ink-50"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="mb-6 text-center">
              <h3 className="font-display text-lg font-semibold text-ink-50">{planName} Plan</h3>
              <p className="mt-1 text-sm text-ink-400">
                {amount === 0 ? 'Free' : `${currency} $${amount.toFixed(2)}`}
              </p>
            </div>

            {paypalLoading ? (
              <div className="flex items-center justify-center gap-2 py-6 text-sm text-ink-400">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading PayPal...
              </div>
            ) : (
              <PayPalButtons
                style={{
                  layout: 'vertical',
                  color: 'gold',
                  shape: 'pill',
                  label: 'pay',
                  height: 44,
                }}
                createOrder={(_data, actions) => {
                  setProcessing(true);
                  return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                      {
                        description: `Morphiic ${planName} Plan`,
                        amount: {
                          currency_code: currency,
                          value: amount.toFixed(2),
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (_data, actions) => {
                  const details = await actions.order?.capture();
                  setProcessing(false);
                  alert(
                    `Payment completed! Thank you, ${details?.payer?.name?.given_name ?? 'customer'}. Order ID: ${details?.id}`,
                  );
                  handleClose();
                }}
                onError={() => {
                  setProcessing(false);
                  alert('An error occurred during payment. Please try again.');
                }}
                onCancel={() => setProcessing(false)}
              />
            )}

            {processing && (
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-accent-cyan">
                <Loader2 className="h-3 w-3 animate-spin" />
                Processing payment...
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
