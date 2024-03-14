export interface IRequestProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  // defaultSelectedValue?: boolean;
  title: string;
  subTitle: string;
  checkBoxValue: string;
}
