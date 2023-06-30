import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function Form() {
	const url = 'https://localhost:7075/api/Reminders';
	const [data, setData] = useState({
		to: '',
		method: '',
		sendAt: '', // belke de new Date() yazmaliyam
		content: '',
	});

	const submit = (e) => {
		e.preventDefault();
		const formData = {
			to: data.to,
			method: data.method,
			sendAt: new Date(data.sendAt).toISOString(),
			content: data.content,
		};
		// console.log(formData.sendAt);
		axios.post(url, formData).then((response) => console.log(response));
	};

	const handle = (e) => {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	};

	return (
		<div>
			<form onSubmit={(e) => submit(e)}>
				<div class="form-group">
					<label>To (email or telegram id) </label>
					<input
						onChange={(e) => handle(e)}
						id="to"
						type="text"
						class="form-control"
						value={data.to}
						name="to"
					/>
				</div>
				<div class="form-group">
					<label>Method</label>
					<select
						onChange={(e) => handle(e)}
						id="method"
						value={data.method}
						name="method"
					>
						<option value="email">Email</option>
						<option value="telegram">Telegram</option>
					</select>
				</div>
				<div class="form-group">
					<label>Send at date</label>
					<input
						onChange={(e) => handle(e)}
						id="sendAt"
						type="datetime-local"
						value={data.sendAt}
						name="sendAt"
					/>
				</div>
				<div class="form-group">
					<label>Content</label>
					<input
						onChange={(e) => handle(e)}
						id="content"
						type="text"
						class="form-control"
						value={data.content}
						name="content"
					/>
				</div>
				<button class="btn">Submit</button>
			</form>
		</div>
	);
}

export default Form;

// {
// 	to: data.to,
// 	method: data.method,
// 	sendAt: data.sendAt.toISOString(),
// 	content: data.content,
// }
