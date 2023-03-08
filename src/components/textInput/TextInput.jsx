import './textInput.scss';

const TextInput = ({ type, placeholder, value, onChange, onFocus }) => {
	return (
		<input
			className='input'
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onFocus={onFocus}
		/>
	);
};

export default TextInput;
