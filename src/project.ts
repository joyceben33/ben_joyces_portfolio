interface technologies {
    name: string
    icon: string
    docs_link: string
}

interface project {
    project_name: string
    project_description: string
    preview_img: string
    deploy_link: string
    repo_link: string
    technologies: technologies[]
}

interface portfolio {
    projects: project[]
}
