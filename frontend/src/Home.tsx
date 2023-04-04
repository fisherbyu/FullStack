import React from "react";
import joel from './1.jpg'

function Home(props: any) {
    //Basic Home Page
    return (
        <React.Fragment>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Welcome to My Site!</h1>
                        <img src={joel} alt="Joel Hilton" style={{"width": "300px"}}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;