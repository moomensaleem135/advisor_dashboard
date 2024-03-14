export interface Data {
  client: string;
  contact: string;
  email: string;
  effectiveDate: string;
}

export interface Column {
  id: 'client' | 'contact' | 'email' | 'effectiveDate' | 'edit';
  label: string;
  minWidth?: number;
  align?: 'center' | 'left' | 'right';
  format?: (value: number) => string;
}
