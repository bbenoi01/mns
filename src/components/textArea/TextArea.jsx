import './textArea.scss';

const TextArea = ({ placeholder, value, onChange }) => {
	return (
		<textarea
			className='text-area'
			rows={10}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextArea;
