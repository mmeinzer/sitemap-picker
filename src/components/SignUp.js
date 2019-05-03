import React from 'react';
import useTextInput from './useTextInput';

function SignUp() {
  const [domain, DomainInput] = useTextInput('Domain');
  const [email, EmailInput] = useTextInput('Email');

  console.log({ email, domain });
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
        className="mb-8"
      />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        className="flex flex-col"
      >
        <DomainInput key="domain-input" />
        <EmailInput key="email-input" />
        <button type="submit">Next</button>
      </form>
      <p>Domain: {domain}</p>
      <p>Email: {email}</p>
    </section>
  );
}

export default SignUp;
