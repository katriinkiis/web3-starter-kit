import React from "react";
import './App.scss';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import AccountButton from "./components/AccountButton";
import Posts from "./components/posts/Posts";
import PostFormModule from "./components/posts/PostFormModule";
import ShowPost from "./components/posts/ShowPost";

function App(props) {

  const [web3, setWeb3] = useState()
  const [alephAccount, setAlephAccount] = useState() // for data and storage
  const [walletAddress, setWalletAddress] = useState()

  const [modalOpen, setModalOpen] = useState(false)

  const connectWallet = async (e) => { //
    const { alephAccount, web3 } = await props.connectWeb3(e) // calls out prop from index.js
    const accounts = await web3.eth.getAccounts()

    setWeb3(web3)
    setAlephAccount(alephAccount)
    setWalletAddress(accounts[0])
  }

  useEffect(() => {
    if (window.ethereum.isConnected()) {
      connectWallet()
    }
  }, [])


  const truncateAddress = (address) => {
    return `${address.slice(0,5)}...${address.slice(address.length - 4, address.length)}` // declares how it shows metamask username
  }

  const timeSince = (date) => {

    var seconds = Math.floor((new Date() - date) / 1000)

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " y"
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " mo"
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " d"
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " h"
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " m"
    }
    return Math.floor(seconds) + " s"
  }



  return (
      <div className="App">
        <Router>
          {/* <div className="overlay"></div> */}
          <Navbar alephAccount={alephAccount}
                  setModalOpen={setModalOpen}
          />
          <AccountButton connectWallet={connectWallet}
                         walletAddress={walletAddress}
                         truncateAddress={truncateAddress} />
          <div className="container">
            <div className="row">
              <div className="col-6 offset-3">
                <Switch>
                  <Route path ="/" exact>
                    <Posts
                        truncateAddress={truncateAddress}
                        timeSince={timeSince}
                        setModalOpen={setModalOpen}
                        walletAddress={walletAddress}
                    />
                  </Route>
                  <Route path="/posts/:item_hash">
                    <ShowPost timeSince={timeSince}
                              truncateAddress={truncateAddress}
                    />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
          <PostFormModule
              alephAccount = {alephAccount}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
          />
        </Router>
      </div>
  );
}

export default App;
