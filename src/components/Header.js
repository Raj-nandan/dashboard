import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#adb370", borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
                    <div className="container-fluid">

                        <select className="form-select form-select-lg " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                        </select>

                        <a className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/">Crypto 
                            Dashboard</a>

                    </div>
                </nav>

        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid"> 
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>  
                  </ul>
                </li>
              </ul>
              
            </div>
          </div>
        </nav> */}
      </div>
    )
  }
}

export default Header
