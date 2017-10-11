import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     term: ""
        // }
    }

    render(){
        return (
        <div className="search-bar form-group">
            <input
                className="form-control"

                onChange= {(event) => this.onInputChange(event.target.value)} />

            {/*<button onClick={this.toggleOpen.bind(this)}>Click</button>*/}
            {/*{this.showContent()}*/}
        </div>
        )
    }

    // toggleOpen(){
    //     console.log("--", this.state);
    //     this.setState({
    //         isOpend: !this.state.isOpend
    //     });
    //
    // }

    // showContent(){
    //     if(!this.state.isOpend) return null;
    //
    //     return <p>Tramparam papam!</p>
    // }

    onInputChange(term){
        // this.setState({
        //     term: term
        // });

        this.props.onSearchBarChange(term);
    }
}

export default SearchBar;