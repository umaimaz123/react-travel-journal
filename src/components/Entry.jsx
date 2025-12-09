export default function Entry(props) {
  return (
    <article className="journal-entry">
      <img className='journal-image' src={ props.img.src } alt={ props.img.alt } />
      
      <div className="location">
        <img  src="src/assets/marker.png" alt="Marker image" width='7' />
        <span>{ props.country }</span>
        <a href={ props.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a> 
        
        <h2>{ props.title }</h2>
        <h4>{ props.dates }</h4>
        <p>
          { props.text }
        </p> 
      </div>

    </article>
  )
}
