interface ITechnology {
  name: string;
  icon: string;
  docsLink: string;
}

export interface IProject {
  name: string;
  isOrg: boolean;
  scrollTag: string;
  description: string;
  image: string;
  deployLink: string;
  repoLink: string;
  technologies: ITechnology[];
}
