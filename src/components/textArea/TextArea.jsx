import './textArea.scss';

const TextArea = ({ placeholder, value, onChange, onFocus }) => {
	return (
		<textarea
			className='text-area'
			rows={10}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onFocus={onFocus}
		/>
	);
};

export default TextArea;
