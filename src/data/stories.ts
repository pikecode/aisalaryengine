export interface Story {
  id: number
  image: string
  avatar: string
  name: string
  role: string
  category: string
  description: string
}

export const stories: Story[] = [
  {
    id: 1,
    image: '/images/stories/story-1.jpg',
    avatar: '/images/stories/avatar-1.jpg',
    name: '跨境电商卖家',
    role: '变现了第一桶金',
    category: '网店收益',
    description: '用了这个工具，我节省了80%的时间...'
  },
  {
    id: 2,
    image: '/images/stories/story-2.jpg',
    avatar: '/images/stories/avatar-2.jpg',
    name: '自媒体创作者',
    role: '月入过万的秘诀',
    category: '内容变现',
    description: 'AI帮我生成选题，粉丝增长了3倍...'
  },
  {
    id: 3,
    image: '/images/stories/story-3.jpg',
    avatar: '/images/stories/avatar-3.jpg',
    name: '独立开发者',
    role: '副业收入超主业',
    category: '技术变现',
    description: '用AI工具开发了一款小程序，月流水破万...'
  },
  {
    id: 4,
    image: '/images/stories/story-4.jpg',
    avatar: '/images/stories/avatar-4.jpg',
    name: '知识付费博主',
    role: '课程销售破千份',
    category: '知识变现',
    description: '借助平台精准触达目标用户，转化率提升50%...'
  },
  {
    id: 5,
    image: '/images/stories/story-5.jpg',
    avatar: '/images/stories/avatar-5.jpg',
    name: '设计师接单达人',
    role: '接单效率翻倍',
    category: '技能变现',
    description: '通过平台匹配到优质客户，再也不愁没单接...'
  }
]
