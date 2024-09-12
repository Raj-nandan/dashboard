import React, { Component } from 'react'

export class CardSection extends Component {
  render() {
    return (
      <div>
         <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '3px !important', marginBottom: '0px !important', color: '#c3dd3d', textTransform: 'uppercase' }}>
                    {this.props.coinName}
                </div>
                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#817b7b", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Sentiment UP</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "green" }}>
                                {this.props.sentimentUP} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(67 63 63)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Sentiment Down</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "black" }}>
                                {this.props.sentimentDown} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(67 63 63)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>All Time High</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "rgb(121 223 255)" }}>
                                Rs {this.props.alltimeHigh}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "#817b7b", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>High 24hrs</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "green" }}>
                                Rs {this.props.high_24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(67 63 63)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Low 24hrs</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "black" }}>
                                Rs {this.props.low_24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center  m-3"
                        style={{ width: "11rem", backgroundColor: "rgb(67 63 63)", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}>Change 24hrs</h5>
                            <p className="card-text fw-bold fs-5" style={{ color: "black" }}>
                             {this.props.change_24}
                            </p>
                        </div>
                    </div>
                    
                </section> 
                <div>
                    <div className="text-white text-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '5px', marginTop: "1%" }}> Current
                        Price</div>
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '50px',
                        fontWeight: '700', color: "#fcdf03", textDecoration: 'none solid rgb(255, 255, 255)',
                        textAlign: 'center'
                    }}>
                        Rs {this.props.currentPrice}
                    </div>
                </div>
                
      </div>
    )
  }
}

export default CardSection
