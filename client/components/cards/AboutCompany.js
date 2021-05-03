import AboutCard from "./About"
const AboutCompany = ({ company }) => {
    return (

        <AboutCard title="Company" texts={
            [`name: ${company.name}`,
            `catchPhrase: ${company.catchPhrase}`,
            `bs: ${company.bs}`
            ]
        } />

    )
}
export default AboutCompany