import Toast from 'react-bootstrap/Toast';

 const Notification = (props:any)=>{
  const toggleShowB = () => {props.resetNotification(!props.isShow)};

  return (
    <Toast onClose={toggleShowB} show={props.isShow} animation={false} className='mobile-only'>
        <Toast.Header>
        <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
        />
        <strong className="me-auto">Fruit added into Jar</strong>
        </Toast.Header>
        <Toast.Body>Scroll Below to see added fruit!</Toast.Body>
    </Toast>
);
}

export default Notification;