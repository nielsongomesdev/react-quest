const Button = ({ label }) => {
    const handleButtonClick = () => {
        alert(`A label desse botão é ${label}`);
    }
    
    return (
        <button onClick={handleButtonClick}>{label}</button>
    )
}

export default Button