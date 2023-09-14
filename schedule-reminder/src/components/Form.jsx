import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const url = "https://localhost:7075/api/Reminders";
  const [data, setData] = useState({
    to: "",
    method: "",
    sendAt: "",
    content: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const formData = {
      to: data.to,
      method: data.method,
      sendAt: new Date(data.sendAt).toISOString(),
      content: data.content,
    };
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
        <h1 className="header">Message schedule app</h1>
        <div className="form-group">
          <label>To</label>
          <input
            onChange={(e) => handle(e)}
            id="to"
            type="text"
            className="input"
            value={data.to}
            name="to"
            placeholder="Email or Telegram Id"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label>Method</label>
          <select
            onChange={(e) => handle(e)}
            id="method"
            value={data.method}
            name="method"
            className="input"
          >
            <option value="email">Email</option>
            <option value="telegram">Telegram</option>
          </select>
        </div>
        <div className="form-group">
          <label>Send at date</label>
          <input
            onChange={(e) => handle(e)}
            id="sendAt"
            type="datetime-local"
            value={data.sendAt}
            name="sendAt"
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <input
            onChange={(e) => handle(e)}
            id="content"
            type="text"
            className="input"
            value={data.content}
            name="content"
            placeholder="Content"
            autoComplete="off"
          />
        </div>
        <button className="ui-btn">
          <span>Send it</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
