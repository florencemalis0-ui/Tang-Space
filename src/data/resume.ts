/**
 * 简历数据源。
 *
 * 铁律：个人板块要真实数据，不编占位（CLAUDE.md #30）。
 * 现在是空框架——填真实经历后，Resume 页自动渲染。
 *
 * 填写示例（取消注释、替换为真实内容）：
 *
 * export const workExperience: WorkItem[] = [
 *   {
 *     company: '公司名',
 *     role: '职位',
 *     period: '2024.10 - 2025.02',
 *     description: '一段话职责描述。',
 *     highlights: ['关键成果一', '关键成果二'],
 *     tech: ['Go', 'Python', 'AI'],
 *   },
 * ]
 *
 * export const projects: ProjectItem[] = [
 *   {
 *     name: '项目名',
 *     role: '角色',
 *     period: '2026.04 - 进行中',
 *     tag: '进行中',            // 可选，角标
 *     description: '一段话项目说明。',
 *     highlights: ['技术亮点一', '技术亮点二'],
 *     tech: ['React', 'TypeScript'],
 *     link: { text: '链接文字', url: 'https://...' },  // 可选
 *   },
 * ]
 */

export interface WorkItem {
  company: string
  role: string
  period: string
  description: string
  highlights?: string[]
  tech: string[]
}

export interface ProjectItem {
  name: string
  role: string
  period: string
  tag?: string
  description: string
  highlights?: string[]
  tech: string[]
  link?: { text: string; url: string }
}

// TODO: 填真实工作经历（见上方示例）
export const workExperience: WorkItem[] = []

// TODO: 填真实项目经历（见上方示例）
export const projects: ProjectItem[] = []
