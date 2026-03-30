export type CartStatus = 'pending' | 'paid' | 'completed'

export interface CartItem {
  id: string
  name: string
  tag: string
  price: number
  status: CartStatus
}

export const mockCartItems: CartItem[] = [
  { id: '1', name: 'AI睡前故事生成器模板', tag: '官方模板', price: 256, status: 'pending' },
  { id: '2', name: 'AI睡前故事生成器模板', tag: '官方模板', price: 256, status: 'paid' },
  { id: '3', name: 'AI睡前故事生成器模板', tag: '官方模板', price: 256, status: 'completed' }
]
