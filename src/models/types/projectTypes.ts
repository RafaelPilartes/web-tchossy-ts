export type projectPropsType = {
  _id: string
  nome: string
  description: string
  imgUrl: string
  link: string
  category: string
  tags: string[]
}

export type projectType = {
  project: projectPropsType
}
