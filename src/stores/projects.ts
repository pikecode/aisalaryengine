import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Project } from '@/types'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<Project[]>([
    {
      id: '1',
      title: 'AI红书爆款文案生成器',
      category: '副业',
      tags: ['小红书', 'AI写作', '内容创作'],
      views: 2341,
      likes: 186,
      difficulty: 1,
      revenue: '3000-8000/月',
      coverImage: '',
      description: '利用AI自动生成小红书爆款文案，帮助博主快速涨粉变现'
    },
    {
      id: '2',
      title: 'AI视频脚本工厂',
      category: '副业',
      tags: ['短视频', 'AI脚本', '抖音'],
      views: 1892,
      likes: 143,
      difficulty: 1,
      revenue: '5000-12000/月',
      coverImage: '',
      description: '批量生成短视频脚本，适合矩阵号运营'
    },
    {
      id: '3',
      title: 'AI私域流量运营系统',
      category: '创业',
      tags: ['私域', '微信', 'AI客服'],
      views: 3102,
      likes: 267,
      difficulty: 2,
      revenue: '10000-30000/月',
      coverImage: '',
      description: '搭建AI驱动的私域流量运营体系，自动化客户转化'
    },
    {
      id: '4',
      title: 'AI知识付费课程工具',
      category: '工具',
      tags: ['知识付费', '课程', 'AI辅助'],
      views: 1567,
      likes: 98,
      difficulty: 2,
      revenue: '8000-20000/月',
      coverImage: '',
      description: '快速生成结构化课程内容，降低知识付费创业门槛'
    },
    {
      id: '5',
      title: 'AI电商选品分析器',
      category: '创业',
      tags: ['电商', '选品', '数据分析'],
      views: 2789,
      likes: 201,
      difficulty: 2,
      revenue: '15000-50000/月',
      coverImage: '',
      description: '智能分析电商平台数据，精准选品提升转化率'
    },
    {
      id: '6',
      title: 'AI本地生活服务助手',
      category: '工具',
      tags: ['本地生活', '美团', 'AI营销'],
      views: 1234,
      likes: 87,
      difficulty: 3,
      revenue: '20000-80000/月',
      coverImage: '',
      description: '为本地商家提供AI营销方案，提升到店转化'
    }
  ])

  const activeCategory = ref<string>('全部')
  const categories = ['全部', '副业', '创业', '工具']

  const filteredProjects = computed(() => {
    if (activeCategory.value === '全部') return projects.value
    return projects.value.filter(p => p.category === activeCategory.value)
  })

  function setCategory(cat: string) {
    activeCategory.value = cat
  }

  return { projects, activeCategory, categories, filteredProjects, setCategory }
})
