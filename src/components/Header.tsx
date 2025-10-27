'use client';
import * as React from 'react';

export default function Header() {
  return (
    <header className="h-14 border-b bg-background/60 backdrop-blur flex items-center px-4">
      <h1 className="text-base font-medium">Gestão de Impressão</h1>
      <div className="ml-auto flex items-center gap-2" />
    </header>
  );
}
