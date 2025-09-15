const FormattedText = ({ text, textColor }) => {
    const textUpperCase = text.toUpperCase()

    const componentStyle = {
        color: textColor
    }

    return (
        <p style={componentStyle}>
            {textUpperCase}
        </p>
    )
}

export default FormattedText