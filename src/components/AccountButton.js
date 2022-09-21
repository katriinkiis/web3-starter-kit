function AccountButton(props) {

    return (
        <nav className="navbar fixed-bottom">
            <div className='container btn-account'>
                <div className='col-3'>
                    {
                        props.walletAddress ?
                        <div className="account-btn mb-2 me-3 py-2" >
                            {props.truncateAddress(props.walletAddress)}
                        </div>

                        : <a className="btn btn-primary"
                             aria-current="page"
                             href="#"
                             onClick={props.connectWallet}>
                                Connect Wallet
                        </a>
                    }
                </div>
            </div>
        </nav>
    );
}

export default AccountButton;