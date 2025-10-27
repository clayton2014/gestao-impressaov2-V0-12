'use client'

import * as React from 'react'

  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}