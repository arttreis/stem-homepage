import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'beauty',
    name: 'Beauty',
    description: 'Beleza de dentro para fora. Colágeno, biotina e antioxidantes.',
    gradient: 'linear-gradient(135deg, #E91E8C, #FF6BB5)',
    icon: '✦',
    href: '/categorias/beauty',
  },
  {
    id: 'clinical',
    name: 'Clinical',
    description: 'Formulações clínicas com evidência científica comprovada.',
    gradient: 'linear-gradient(135deg, #008DD2, #33A8E0)',
    icon: '⚕',
    href: '/categorias/clinical',
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    description: 'Nutrição completa para o seu dia a dia com qualidade premium.',
    gradient: 'linear-gradient(135deg, #61CE70, #8FE29A)',
    icon: '❖',
    href: '/categorias/nutrition',
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Alto desempenho para atletas e praticantes de atividade física.',
    gradient: 'linear-gradient(135deg, #FF6B35, #FFB347)',
    icon: '⚡',
    href: '/categorias/performance',
  },
]
