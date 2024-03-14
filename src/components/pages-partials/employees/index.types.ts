export interface Data {
  name: string;
  email: string;
  title: string;
  hireDate: string;
}

export interface Column {
  id: 'name' | 'email' | 'title' | 'hireDate' | 'edit';
  label: string;
  minWidth?: number;
  align?: 'center' | 'left' | 'right';
  format?: (value: number) => string;
}
