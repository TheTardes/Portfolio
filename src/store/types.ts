export type Block = Record<string, string | number | string[]> & { type: string };

export interface Project {
  hasContent?: boolean;
  url: string;
  name: string;
  cardImage: string;
  projectImage?: string;
  cardTitle: string;
  tags: string[];
  blocks: Block[];
}
