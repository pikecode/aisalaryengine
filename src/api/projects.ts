import type { Project } from '@/types/project'
import { mockProjects } from '@/data/projects'

export async function getProjects(): Promise<Project[]> {
  // TODO: replace with real API call
  // return fetch(`${import.meta.env.VITE_API_BASE_URL}/projects`).then(r => r.json())
  return Promise.resolve(mockProjects)
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  return Promise.resolve(mockProjects.find(p => p.id === id))
}
