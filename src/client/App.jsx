import React, {Component} from 'react';
import xp from "./images/xp.jpg";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Title</h1>
                <p>This is a paragraph, inside of the starter webapp. This webapp could eventually become the next Amazon, the
                    future of the internet, or just a simple static webpage.</p>
                <img src={xp} />
            </div>
        );
    }
}

export default App;
