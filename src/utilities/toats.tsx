import Toast from 'react-bootstrap/Toast';


type ToastPropsType = {
    isShow: boolean;
    resetNotification: (...args:any)=> void
};

const Notification = (props: ToastPropsType) => {
    const toggleShowB = () => { props.resetNotification(!props.isShow) };

    return (
        <Toast onClose={toggleShowB} show={props.isShow} animation={false} className='mobile-only'>
            <Toast.Header>
                <strong className="me-auto">Fruit added into Jar</strong>
            </Toast.Header>
            <Toast.Body>Scroll Below to see added fruit!</Toast.Body>
        </Toast>
    );
}

export default Notification;