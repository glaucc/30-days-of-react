import React from "react";

export default function Props(props) {

    // section 1
    const getUserInfo = (firstName, lastName, country) => {
        return `${firstName} ${lastName}. Lives in ${country}.`
    }

    getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

    const User = (props) => {
        return (
            <div>
                <h1>
                    {props.firstName}
                    {props.lastName}
                </h1>
            <small>{props.country}</small>
            </div>
        )
    }



    // section 2
    const welcome = 'Welcome to 30 Days of React'
    const title = 'Getting Started React'
    const subtitle = 'Javascript Library'
    const author = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
    }
    const date = 'Oct 4, 2020'

    const Header = () => {
        return (
        <header>
            <div className="header-wrapper">
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {author.firstName} {author.lastName}
                </p>
                <small>{date}</small>
            </div>
        </header>
        )
    }

    // section 3
    const Header1 = (props) => {
        // console.log(props)
        return (
            <header>
                <div className="header-wrapper">
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {author.firstName} {author.lastName}
                    </p>
                    <small>{date}</small>
                </div>
            </header>
        )
    }


    // section 4
    const Header2 = (props) => {
        // console.log(props)
        return (
            <header>
                <div className="header-wrapper">
                    <h1>{props.welcome}</h1>
                </div>
            </header>
        )
    }

    const Header3 = (props) => {
        console.log(props)
        return (
            <header>
                <div className="header-wrapper">
                    <h1>{props.welcome}</h1>
                    <h2>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                    <p>{props.firstName} {props.lastName}</p>
                    <small>{props.date}</small>
                </div>
            </header>
        )
    }

    const welcome1='Welcome to 30 Days of React'
    const title1='Getting Started React'
    const subtitle1='Javascript Library'
    const firstName1='Asabeneh'
    const lastName1='Yetayeh'
    const date1='Oct 4, 2020'

    // Section 5
    const Skills = (props) => {
        const skillList = props.skills.map((skill => <li>{skill}</li>))
        return <ul>{skillList}</ul>
    }
    return (
        <>

            <Skills skills={['HTML', 'CSS', 'Javascript']}/>
            {/* <User firstName = 'Asabeneh' lastName = 'Yetayeh' country = 'Finland' /> */}

            {/* <Header1 /> */}
            {/* <div className="app"> */}
                {/* <Header2 welcome='Welcome to 30 Days of React' /> */}
            {/* </div> */}


            {/* <Header3
                welcome={welcome}
                title={title}
                subtitle={subtitle}
                firstName={firstName}
                lastName={lastName}
                date={date}
            /> */}



        </>
    )
}