import './index.css';

const AlertButton = ({ label }) => (
    <button onClick={() => alert(`A label desse botão é ${label}`)}>
        {label}
    </button>
);

export default AlertButton;