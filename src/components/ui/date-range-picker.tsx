'use client';
import * as React from 'react';

export type DateRange = { from?: Date; to?: Date };

interface Props {
  className?: string;
  value?: DateRange;
  onChange?: (v: DateRange) => void;
}

function toInput(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export function DatePickerWithRange({ className, value, onChange }: Props) {
  const [from, setFrom] = React.useState<string>(value?.from ? toInput(value.from) : '');
  const [to, setTo] = React.useState<string>(value?.to ? toInput(value.to) : '');

  React.useEffect(() => {
    onChange?.({ from: from ? new Date(from) : undefined, to: to ? new Date(to) : undefined });
  }, [from, to]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={className}>
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border rounded px-2 py-1"
        aria-label="Data inicial"
      />
      <span className="mx-2">—</span>
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border rounded px-2 py-1"
        aria-label="Data final"
      />
    </div>
  );
}
