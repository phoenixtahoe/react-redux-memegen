import React, { useState } from "react";
import uuidv4 from "uuid/v4";
import { Form, Label, Input } from "reactstrap";

function NewMemeForm({ add }) {

  const [data, setData] = useState({
    url: "",
    topText: "",
    bottomText: "", 
  });

  function handleSubmit(e) {
    e.preventDefault();
    add({ ...data, id: uuidv4() });
    setData({
        url: "",
        topText: "",
        bottomText: "", 
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((f) => ({ ...f, [name]: value }));
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="topText">Top Text</Label>
        <Input
          type="text"
          name="topText"
          onChange={handleChange}
          value={data.topText}
        />
        <Label htmlFor="bottomText">Bottom Text</Label>
        <Input
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={data.bottomText}
        />
        <Label htmlFor="url">Image URL</Label>
        <Input
          type="text"
          name="url"
          onChange={handleChange}
          value={data.url}
        />
        <button className="mt-2 btn btn-primary" type="submit">Generate Meme!</button>
      </Form>
    </div>
  );
}

export default NewMemeForm;
