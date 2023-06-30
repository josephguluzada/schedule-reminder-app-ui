import React, { useState } from 'react';
import './Form.css';

function Form() {
	const [data, setData] = useState({
		to: '',
		method: '',
		sendAt: '',
		content: '',
	});

	const handle = (e) => {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	};

	return (
		<div>
			<form action="#">
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
						name="sendat"
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
				<button type="submit" class="btn">
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;
