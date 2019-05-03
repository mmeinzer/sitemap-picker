import React from 'react';
import TextInput from './TextInput';
import useInput from '../hooks/useInput';

function SignUp() {
  const [email, setEmail, emailProps] = useInput('');
  const [domain, setDomain, domainProps] = useInput('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, domain });
  }

  return (
    <section className="container mx-auto bg-white p-8 border rounded flex flex-col items-center">
      <p className="text-3xl">Enter your homepage URL and email</p>
      <p className="text-xl my-8">
        We'll look for your sitemap and let you select which pages you'd like
        our tool to scan.
      </p>
      <img
        src="https://image.flaticon.com/icons/svg/115/115791.svg"
        width="112"
        height="112"
        alt="internet icon"
        className=""
      />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <TextInput label="Email" {...emailProps} />
        <TextInput label="Domain" {...domainProps} />
        <button type="submit" className="mt-6 text-lg">
          Next →
        </button>
      </form>
    </section>
  );
}

export default SignUp;
