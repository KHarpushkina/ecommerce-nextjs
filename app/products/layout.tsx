'use client'

import ProductsProvider from '@/context/products/provider';

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
