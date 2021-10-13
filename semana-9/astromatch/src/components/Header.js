import React from "react"
import { Head, Base } from "./Styles"
import { AiFillFire } from "react-icons/ai"

const Header = (props) => {

    return (

        <Base>
            {(props.currentPage === "Candidatos") ? (
                <Head>
                    <div>
                        <button onClick={() => props.changePage("Matches")}>matches</button>
                    </div>
                    <h3>astroMatch <AiFillFire /></h3>
                    
                </Head >
            ) : (
                <Head>
                    <div>
                        <button onClick={() => props.changePage("Candidatos")}>perfis</button>
                    </div>
                    <h3>astroMatch <AiFillFire /></h3>
                </Head>
            )}
        </Base>

    )
}

export default Header