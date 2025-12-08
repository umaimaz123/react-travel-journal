export default function Contact(props) { 
  // this is how props are passed to components
  return (
    <article className="contact-card">
         <h1>{ props.num }</h1> 
        <img 
            src={ props.img }
            alt={ props.imgAlt }
        />
        <h3>{ props.name }</h3>
        <div className="info-group">
            <img 
                src="./images/phone-icon.png" 
                alt="phone icon" 
            />
            <p>{ props.contact }</p>
        </div>
        <div className="info-group">
            <img 
                src="./images/mail-icon.png" 
                alt="mail icon"
            />
            <p>{ props.email }</p>
        </div>
    </article>
  )
}
