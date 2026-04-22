import { useEffect } from 'react';

function Toast({ message, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2600);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="toast-wrap">
      <div className="toast">✓ {message}</div>
    </div>
  );
}

export default Toast;
