export interface Project {
  size: "small" | "medium" | "large";
  image: string;
  title: string;
  description: string;
  tags: string[];
  labels: string[];
  color: string;
}
