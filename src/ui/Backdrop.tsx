import "./Backdrop.css";

type Props = {
  className?: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
};

const Backdrop: React.FC<Props> = (props) => {
  return <div className={props.className} onClick={props.onClose} />;
};

export default Backdrop;
