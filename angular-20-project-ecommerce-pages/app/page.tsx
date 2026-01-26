"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/product-grid"
import { Cart } from "@/components/cart"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
  rating: number
}

export interface CartItem extends Product {
  quantity: number
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "/iphone-15-pro.png",
    category: "Smartphones",
    description: "Latest iPhone with titanium design and A17 Pro chip",
    rating: 4.8,
  },
  {
    id: 2,
    name: "MacBook Air M3",
    price: 1299,
    image: "/macbook-air.png",
    category: "Laptops",
    description: "Ultra-thin laptop with M3 chip and all-day battery",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 399,
    image: "/placeholder-xilke.png",
    category: "Audio",
    description: "Premium noise-canceling wireless headphones",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "/samsung-galaxy-smartphone.png",
    category: "Smartphones",
    description: "AI-powered smartphone with advanced camera system",
    rating: 4.6,
  },
  {
    id: 5,
    name: 'iPad Pro 12.9"',
    price: 1099,
    image: "/placeholder-tnbfe.png",
    category: "Tablets",
    description: "Professional tablet with M2 chip and Liquid Retina display",
    rating: 4.8,
  },
  {
    id: 6,
    name: "AirPods Pro 2",
    price: 249,
    image: "/placeholder-cd4ox.png",
    category: "Audio",
    description: "Wireless earbuds with adaptive transparency",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Dell XPS 13",
    price: 1199,
    image: "/dell-xps-laptop.png",
    category: "Laptops",
    description: "Premium ultrabook with InfinityEdge display",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Nintendo Switch OLED",
    price: 349,
    image: "/placeholder-t9i4g.png",
    category: "Gaming",
    description: "Portable gaming console with vibrant OLED screen",
    rating: 4.7,
  },
]

export default function EcommercePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <ProductGrid products={products} onAddToCart={addToCart} />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  )
}
