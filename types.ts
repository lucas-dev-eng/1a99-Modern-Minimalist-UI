// FIX: Added React import to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

export interface Category {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
}