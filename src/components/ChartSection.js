import React, { Component } from 'react'
import Chart from "react-apexcharts";

export class ChartSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Price: {
        options: {
          chart: {
            id: 'area-datetime',
          },
          grid: {
            show: true
          }, title: {
            text: "Market Price (INR)",
            style: {
              fontSize: '14px', fontWeight: 'bold', color: "#fcdf03"
            }
          }, stroke: {
            curve: 'smooth'
          }, xaxis: {
            type: "datetime"
          }, dataLabels: {
            enabled: false
          }, yaxis: {
            show: true
          }, colors: ["pink"],
          tooltip: {
            y: {
              formatter: (value) => { return value.toFixed(2) }
            }, theme: "dark"
          }, selection: 365,
        },
        series: [
          {
            name: 'Market Price',
            data: [[1707555617848, 3911216.603771486]]

          }
        ]
      }
      , Market_Cap: {
        options: {
          grid: {
            show: false
          }, title: {
            text: "Market Cap (INR)",
            style: {
              fontSize: '14px', fontWeight: 'bold', color: '#ff69f5'
            }
          }, stroke: {
            curve: 'smooth'
          }, xaxis: {
            type: "datetime"
          }, dataLabels: {
            enabled: false
          }, yaxis: {
            show: false
          }, colors: ["#ff69f5"],
          tooltip: {
            y: {
              formatter: (value) => { return value.toFixed(2) }
            }, theme: "dark"
          }
        },
        series: [
          {
            name: 'Market Cap (INR)',
            data: [[707555617848, 76790233626563.75]]

          }
        ]
      }
      ,
      Tot_Vol: {
        options: {
          grid: {
            show: false
          }, title: {
            text: "Market Volume",
            style: {
              fontSize: '14px', fontWeight: 'bold', color: "#00ffea"
            }
          }, stroke: {
            curve: 'smooth'
          }, xaxis: {
            type: "datetime"
          }, dataLabels: {
            enabled: false
          }, yaxis: {
            show: false
          }, colors: ["#00ffea"],
          tooltip: {
            y: {
              formatter: (value) => { return value.toFixed(2) }
            }, theme: "dark"
          },
        },
        series: [
          {
            name: "Market Volume",
            data: [[1707555617848, 2423757695821.437]]

          }
        ]

      }
    };

    this.prevSelection = this.state.Price.options.selection
  }
  prevId = this.props.Id

  fetchData = async () => {
    let chartData = await fetch('https://api.coingecko.com/api/v3/coins/' + this.props.Id + '/market_chart?vs_currency=inr&days=' + this.state.Price.options.selection);
    let jsonChartData = await chartData.json()
    this.setState({ Price: { options: this.state.Price.options, series: [{ name: 'Market Price', data: jsonChartData.prices }] } })

    this.setState({ Market_Cap: { options: this.state.Market_Cap.options, series: [{ name: 'Market Price', data: jsonChartData.market_caps }] } })
    this.setState({ Tot_Vol: { options: this.state.Tot_Vol.options, series: [{ name: 'Market Price', data: jsonChartData.total_volumes }] } })

  }
  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (this.prevId !== this.props.Id) {
      this.prevId = this.props.Id
      this.fetchData()
    }
    if (this.prevSelection !== this.state.Price.options.selection) {
      this.prevSelection =this.state.Price.options.selection
      this.fetchData()
  }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col" style={{ maxWidth: '610px' }}>
              <div id="chart">
                <div className="toolbar">
                  <button id="one_month"

                    onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 1 }, series: this.state.Price.series } })}>
                    1D
                  </button>
                  &nbsp;
                  <button id="six_months"

                    onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 7 }, series: this.state.Price.series } })}>
                    1W
                  </button>
                  &nbsp;
                  <button id="one_year"


                    onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 30 }, series: this.state.Price.series } })}>
                    1M
                  </button>
                  &nbsp;
                  <button id="ytd"

                    onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 182 }, series: this.state.Price.series } })}>
                    6M
                  </button>
                  &nbsp;
                  <button id="all"

                    onClick={() => this.setState({ Price: { options: { ...this.tooltip, selection: 365 }, series: this.state.Price.series } })}>
                    1Y
                  </button>
                </div>
                <Chart
                  options={this.state.Price.options}
                  series={this.state.Price.series}
                  type="area"
                  height='400'
                  width='600' />
              </div>
            </div>

            {/* -----------------market details--------------------- */}

            <div className="col" style={{ maxWidth: '200px' }}>

              <div className="card-body ">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Market Cap </h6>
                <p className="card-text fw-bold "
                  style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                  Rs {this.props.Market_Cap}
                </p>
              </div>

              <div className="card-body ">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Price Change 24hrs </h6>
                <p className="card-text fw-bold "
                  style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                  Rs {this.props.priceChange24}
                </p>
              </div>
              <div className="card-body ">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Total Volume </h6>
                <p className="card-text fw-bold "
                  style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                   {this.props.TotVol}
                </p>
              </div>
              <div className="card-body ">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Circulating Supply</h6>
                <p className="card-text fw-bold "
                  style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                  {this.props.Circulating}
                </p>
              </div>
              <div className="card-body ">
                <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}> Twitter Followers</h6>
                <p className="card-text fw-bold "
                  style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: 'rgb(255, 255, 255)', fontSize: 'small' }}>
                  {this.props.twitterF}
                </p>
              </div>
            </div>
            
            {/* ----------------market cap and volume-------------------- */}

            <div className="col" style={{ maxWidth: '310px' }}>
              <div >
                <Chart
                  options={this.state.Market_Cap.options}
                  series={this.state.Market_Cap.series}
                  type="line"
                  height='200'
                  width='300' />
              </div>
              <div >
                <Chart
                  options={this.state.Tot_Vol.options}
                  series={this.state.Tot_Vol.series}
                  type="line"
                  height='200'
                  width='300' />
              </div>
            </div>




          </div>
        </div>

      </div>
    )
  }
}

export default ChartSection
