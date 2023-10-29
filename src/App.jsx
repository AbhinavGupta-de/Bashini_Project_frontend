import { useState } from 'react';
import { fetchTranslate } from './api/Bashini';

/**
 * Renders the Bhashini Translator Project app.
 * @returns {JSX.Element} The app component.
 */
function App() {
	const [sourceLanguage, setSourceLanguage] = useState('');
	const [targetLanguage, setTargetLanguage] = useState('');
	const [content, setContent] = useState('');
	const [result, setResult] = useState('');

	const lang = {
		hi: 1,
		bn: 2,
		gu: 3,
		kn: 4,
		ml: 5,
		mr: 6,
		or: 7,
		pa: 8,
		ta: 9,
		te: 10,
		as: 11,
	};

	/**
	 * Handles the change event of the source language select element.
	 * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event.
	 */
	const handleSourceLanguageChange = (event) => {
		setSourceLanguage(event.target.value);
	};

	/**
	 * Handles the change event of the target language select element.
	 * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event.
	 */
	const handleTargetLanguageChange = (event) => {
		setTargetLanguage(event.target.value);
	};

	/**
	 * Handles the change event of the content textarea element.
	 * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The change event.
	 */
	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	/**
	 * Handles the form submission event.
	 * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
	 */
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// Handle form submission, e.g., translate the content
		// and set the result in the state (you can call your translation function here).
		const response = await fetchTranslate(
			lang[sourceLanguage],
			content,
			lang[targetLanguage]
		);
		setResult(response.translated_content);
	};

	return (
		<div className="flex flex-col justify-center items-center p-5  bg-[#0b0518] text-[#f4f144] h-full">
			<h1 className="text-4xl">Welcome to Bhashini Translator Project</h1>

			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col justify-center items-center gap-6 mt-20 w-full"
			>
				<div className="flex gap-2 flex-col">
					<div className="flex gap-2 flex-col justify-start items-center text-[18px]">
						<label
							htmlFor="sourceLanguage"
							className="block mb-2 font-medium text-[#fcff47] text-[18px]"
						>
							Source Language
						</label>
						<select
							id="sourceLanguage"
							className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={sourceLanguage}
							onChange={handleSourceLanguageChange}
						>
							<option value="">Choose a Language...</option>
							<option value="hi">Hindi</option>
							<option value="bn">Bengali</option>
							<option value="gu">Gujarati</option>
							<option value="kn">Kannada</option>
							<option value="ml">Malayalam</option>
							<option value="mr">Marathi</option>
							<option value="or">Odia</option>
							<option value="pa">Punjabi</option>
							<option value="ta">Tamil</option>
							<option value="te">Telugu</option>
							<option value="as">Assamese</option>
						</select>
					</div>
					<div className="flex gap-2 flex-col justify-start items-center text-[18px]">
						<label
							htmlFor="targetLanguage"
							className="block mb-2 font-medium text-[18px] text-[#fcff47]"
						>
							Target Language
						</label>
						<select
							id="sourceLanguage"
							className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							value={targetLanguage}
							onChange={handleTargetLanguageChange}
						>
							<option value="">Choose a Language...</option>
							<option value="hi">Hindi</option>
							<option value="bn">Bengali</option>
							<option value="gu">Gujarati</option>
							<option value="kn">Kannada</option>
							<option value="ml">Malayalam</option>
							<option value="mr">Marathi</option>
							<option value="or">Odia</option>
							<option value="pa">Punjabi</option>
							<option value="ta">Tamil</option>
							<option value="te">Telugu</option>
							<option value="as">Assamese</option>
						</select>
					</div>
				</div>
				<div className="text-[22px]">
					Write the content you want to translate below
				</div>
				<div className="flex gap-2 w-[55%]">
					<textarea
						id="contentTextArea"
						className="border border-solid border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full text-black"
						rows="12"
						placeholder="Write here..."
						value={content}
						onChange={handleContentChange}
					></textarea>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
						onClick={handleFormSubmit}
					>
						Translate
					</button>
				</div>
				<div className="text-[25px]">Your translated text is below...</div>
				<div className="flex gap-2 w-[55%]">
					<textarea
						id="resultTextArea"
						className="border border-solid border-gray-400 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full text-black"
						rows="12"
						placeholder="Translated text here..."
						value={result}
						readOnly
					></textarea>
				</div>
			</form>
		</div>
	);
}

export default App;
