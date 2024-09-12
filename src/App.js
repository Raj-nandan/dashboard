import React, { Component } from 'react'
import Header from './components/Header';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "bitcoin",
      Data: {}
    };
    this.fetchData = this.fetchData.bind(this);
    this.throttleFetchData = this.throttleFetchData.bind(this);
  }

  async fetchData() {
    try {
      let data = await fetch(
        "https://api.coingecko.com/api/v3/coins/" + this.state.id
      );
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      let jsonData = await data.json();
      this.setState({ Data: jsonData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(this.throttleFetchData, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async throttleFetchData() {
    // Implement throttle logic here to limit the frequency of fetchData calls
    // For example, use debounce or throttle function
    // This ensures fetchData is not called too frequently
    await this.fetchData();
  }

  handleSubmit = async (e) => {
    await this.setState({ id: e.target.value, Data: this.state.Data });
    this.fetchData();
  };

  render() {
    return (
      <div>
        <Header handle_Submit={this.handleSubmit} />
        <CardSection
          coinName={this.state.Data.id}
          sentimentUP={this.state.Data.sentiment_votes_up_percentage}
          sentimentDown={this.state.Data.sentiment_votes_down_percentage}
          currentPrice={
            this.state.Data.market_data
              ? this.state.Data.market_data.current_price.inr
              : ""
          }
          alltimeHigh={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.inr
              : ""
          }
          high_24={
            this.state.Data.market_data
              ? this.state.Data.market_data.high_24h.inr
              : ""
          }
          low_24={
            this.state.Data.market_data
              ? this.state.Data.market_data.low_24h.inr
              : ""
          }
          change_24={
            this.state.Data.market_data
              ? this.state.Data.market_data.price_change_24h_in_currency.inr
              : ""
          }
        />

        <ChartSection
          Id={this.state.id}
          Market_Cap={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap.inr
              : ""
          }
          priceChange24={
            this.state.Data.market_data
              ? this.state.Data.market_data.price_change_24h
              : ""
          }
          TotVol={
            this.state.Data.market_data
              ? this.state.Data.market_data.total_volume.inr
              : ""
          }
          Circulating={
            this.state.Data.market_data
              ? this.state.Data.market_data.circulating_supply
              : ""
          }
          twitterF={
            this.state.Data.community_data
              ? this.state.Data.community_data.twitter_followers
              : ""
          }
        />
      </div>
    );
  }
}
