export interface TodoInterface {
  id: number | string;
  name: string;
  completed: boolean | null;
  isEditing: boolean;
}

export interface TodoStateInterface {
  todo: string;
  invalid: boolean | null;
  errMsg: string;
}
