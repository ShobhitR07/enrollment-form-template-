interface ContactFormEmailProps {
    name: string
    number:string
    email: string
    message: string
  }
  
  const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
    name,
    number,
    email,
    message
  }) => (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From <strong>{name}</strong> at {email} <strong>{number}</strong>
      </p>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  )
  
  export default ContactFormEmail