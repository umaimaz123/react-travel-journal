export default function Entry(props) {
  const entry = props.entry

  return (
    <article className="journal-entry">
      <img className='journal-image' src={ entry.img.src } alt={ entry.img.alt } />
      
      <div className="location">
        <img  src="src/assets/marker.png" alt="Marker image" width='7' />
        <span>{ entry.country }</span>
        <a href={ entry.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a> 
        
        <h2>{ entry.title }</h2>
        <h4>{ entry.dates }</h4>
        <p>
          { entry.text }
        </p> 
      </div>

    </article>
  )
}
