import './textInput.scss';

const TextInput = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			className='input'
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextInput;
