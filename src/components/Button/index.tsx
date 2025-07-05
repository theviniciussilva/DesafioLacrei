import { ButtonDefault } from "./style";

type Props = {
  title?: string;
  description?: string;
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ title, description, type, children, onClick }: Props) => {
  return (
    <ButtonDefault title={title} onClick={onClick} type={type}>
      {description}
      {children}
    </ButtonDefault>
  );
};

export default Button;
