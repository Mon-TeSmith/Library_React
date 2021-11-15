import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books =[
            { title: "Thieves' Paradise", author: "Eric Jerome Dickey" },
            { title: "Family Business", author: "Carl Weber" },
            { title: 'Mindset', author: 'Carol S Dweck' },
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
            tempBookNumber++;
        if (tempBookNumber === this.books.length) {
            tempBookNumber = 0;
        }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
            tempBookNumber--;
        if (tempBookNumber === this.books.length) {
            tempBookNumber < 2;
            }
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }
 
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                    <div className="col-md-4">
                        {/*Button previous*/}
                        <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    <div className="col-md-4">
                        {/*Display book with cover*/} 
                        <h1>{this.books[this.state.bookNumber].title}</h1> 
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/*Button Nex*/}
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App; 