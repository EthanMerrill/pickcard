import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faLink, faChartBar } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
    // destructure props
    // const {propName} = props

    // State Variables
    // const [variableName, setVariableName] = useState(null)

    //Use Effects
    //useEffect desc
    // useEffect(()=> {

    // },[])

    // JSX return
    return (
        <body className='home'>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Data Policy</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="top-left-card">
                <h1 className="site-logo">PickCard</h1>
            </div>

            <div className="bottom-right-card">
                <h1> Millions and Millions Earned!</h1>
            </div>
            <div className="flex-content">

                <div className="center-content">
                    <h2>Get the Perfect Card for How You Spend</h2>
                    <button className="import-transactions-btn deactivated"> Import Transactions</button>
                    <h3>Receive an email when we launch</h3>
                    <input type="text" placeholder="Search for a card..." />
                    <button>Join the List</button>
                </div>

                <div className='how-it-works-container'>
                    <div className='how-it-works-title'>
                        <h2>How it Works</h2>
                    </div>
                    <div className='how-it-works-block'>
                        <FontAwesomeIcon icon={faLink} size='3x' />
                        <div className="text-container">
                            <h3>Securely Import Your Transaction History</h3>
                            <p>We burn the data when we don't need it anymore 🔥. We don't store your credit card numbers or any other sensitive information.</p>
                        </div>

                    </div>
                    <div className='how-it-works-block'>
                        <FontAwesomeIcon icon={faChartBar} size='3x' />
                        <div className='text-container'>
                            <h3>View Transaction History</h3>
                            <p>Just to make sure we have everything in properly</p>
                        </div>
                    </div>
                    <div className='how-it-works-block'>
                        <FontAwesomeIcon icon={faCreditCard} size='3x' />
                        <div className='text-container'>
                            <h3>We Recommend the most rewarding card for you</h3>
                            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat! Doloribus, quibusdam.</p>
                        </div>

                    </div>
                </div>

            </div>
        </body>
    )

}

export default Home
