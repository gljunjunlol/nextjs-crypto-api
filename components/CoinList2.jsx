import React from "react";

export default class CoinList2 extends React.Component {
    state = {
        loading: true,
        person: null,
    };

    async componentDidMount() {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=sgd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data[74], loading: false });
    }

    render () {
        return (
            <div>
                <h1>Coins following:</h1>
                {this.state.loading || !this.state.person ? ( 
                <div>loading...</div>
                ) : (
                    <div>
                 <div>{this.state.person.id}</div>
                 <div>{this.state.person.current_price}</div>
                 <img src={this.state.person.image}/>
            </div>
        )}
        </div>
        );
    }
}