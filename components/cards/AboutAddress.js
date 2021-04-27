import AboutCard from "./About"

const AboutAddress=({address})=>{
return(

<AboutCard title="Address" texts={
         [ `street: ${address.street}`,
          `suite: ${address.suite}`,
          `city: ${address.city}`,
          `zipcode: ${address.zipcode}`]
          }/>
)
}
export default AboutAddress