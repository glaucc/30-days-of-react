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
    }

    return (
        <>
            {/* <User firstName = 'Asabeneh' lastName = 'Yetayeh' country = 'Finland' /> */}

            <Header/>
        </>
    )
}