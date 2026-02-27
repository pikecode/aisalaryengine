export interface Project {
  id: string
  title: string
  category: '副业' | '创业' | '工具'
  tags: string[]
  views: number
  likes: number
  difficulty: 1 | 2 | 3
  revenue: string
  coverImage: string
  description: string
}
