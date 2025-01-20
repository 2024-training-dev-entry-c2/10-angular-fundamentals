export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
}

export interface ProjectImagesInput {
  projectClass: string;
  images: ProjectImage[];
}
