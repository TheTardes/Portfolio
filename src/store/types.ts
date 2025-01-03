export type Block = Record<string, string | number | string[]> & { type: string };

export interface Project {
  name: string;
  cardImage: string;
  projectImage?: string;
  cardTitle: string;
  tags: string[];
  blocks: Block[];
}
