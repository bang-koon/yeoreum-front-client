export interface RenderProps {
  status: string;
  title: string;
  date: string;
}

export interface FlagIndex {
  [key: string]: any;
}

export interface Tag {
  status: string;
  color: string;
  children: React.ReactNode;
}
