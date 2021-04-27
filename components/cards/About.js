const AboutCard = ({title,texts}) => {
    return (
        <div className="p-4 mb-3 bg-light rounded">
            
            <h4 className="fst-italic">{title}</h4>
            {
                texts.map((text, index)=>  {return  <p key={index} className="mb-0">{text}</p>})
            }
           
        </div>
    )
}
export default AboutCard