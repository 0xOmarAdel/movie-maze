import './Backdrop.css';

const Backdrop = (props) => {
  return (
    <div className={props.backdropClasses} onClick={props.onClose} />
  );
};

export default Backdrop;