import CreatePostButton from "./posts/CreatePostButton";

function Navbar(props) {

    const setModalOpen = props.setModalOpen

    return (
        <nav className="navbar fixed-top">
            <div className='container'>
                <div className='col-3'>
                    {/* <a className="navbar-brand" href="#">Litter</a> */}
                    <div className="card mt-2 me-3">
                        <div className="card-body">
                            <CreatePostButton setModalOpen={setModalOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
