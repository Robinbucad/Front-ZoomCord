import React from "react"
import HomePart1 from "../../components/home1"
import Part2Home from "../../components/home2/part2Home"
import HomePart3 from "../../components/home3/part3Home"
import HomePart4 from "../../components/home4"
import HomePart5 from "../../components/home5"
import HomeFooter from "../../components/footer"

function HomePage() {
    return (
        <React.Fragment>
            <HomePart1></HomePart1>
            <Part2Home></Part2Home>
            <HomePart3></HomePart3>
            <HomePart4></HomePart4>
            <HomePart5></HomePart5>
            <HomeFooter></HomeFooter>
        </React.Fragment>

    )
}

export default HomePage