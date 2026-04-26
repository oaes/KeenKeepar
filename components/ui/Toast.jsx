"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const pushToast = useCallback((message) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message }]);

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2500);
  }, []);

  const contextValue = useMemo(() => ({ pushToast }), [pushToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      <div className="toast toast-top toast-end z-50">
        {toasts.map((toast) => (
          <div key={toast.id} className="alert border-0 bg-[#1f5a49] text-white shadow-lg">
            <CheckCircle2 size={18} />
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}