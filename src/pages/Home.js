import React from "react";

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
    return(
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

            <h2>Get the Perfect Card for How You Spend</h2> 
            <button className="import-transactions-btn deactivated"> Import Transactions</button>
            <h3>Receive an Email When We launch</h3>
            <input type="text" placeholder="Search for a card..."/>
            <button>Join the List</button>
            
            <div className='how-it-works-container'>
                <h2>how it works</h2>
                <div className='how-it-works-block'>
                    <h3>Securely Import Your Transaction History</h3>
                    <p>We burn the data when we don't need it anymore. We don't store your credit card numbers or any other sensitive information.</p>
                </div>
                <div className='how-it-works-block'>
                    <h3>View Transaction History</h3>
                    <p>Just to make sure we have everything in properly</p>
                </div>
                <div className='how-it-works-block'>
                    <h3>We Recommend the most rewarding card for you</h3>
                </div>
            </div>
        </body>
    )

}

export default Home
