import './index.css';

const StyledText = ({ text, textColor }) => (
    <p style={{ color: textColor }}>
        {text.toUpperCase()}
    </p>
);

export default StyledText;