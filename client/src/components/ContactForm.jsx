import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    //NOTE access key needs to be created by Eli so emails are sent to his inbox.

    formData.append("access_key", "e5fc44f0-7e34-4230-a281-a8d55afec682");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input className="my-3 text-black" type="text" name="name" required />
        <input className="my-3 text-black" type="email" name="email" required />
        <input
          className="my-3 text-black"
          type="text"
          name="location"
          required
        />
        <textarea
          className="my-3 text-black"
          name="Questions/Requests"
          required
        ></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
