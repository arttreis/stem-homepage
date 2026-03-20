export interface NavItem {
  label: string
  href: string
}

export interface Category {
  id: string
  name: string
  description: string
  gradient: string
  icon: string
  href: string
}

export interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export interface Professional {
  id: string
  name: string
  specialty: string
  credentials: string
  avatar: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  href: string
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}
