import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HeaderNew extends Component {
	constructor(props){
        super(props);
        this.state = {
            isAuthenticatedBasobaas: 'false',
            userPhone:'',
            localStorage: {
                userProfilePic: '/images/avatar.svg',
                userNameBasobaas: 'User Name'
            }
        }
    }

    componentDidMount() {
		if (navigator.appVersion.indexOf("Win")!=-1)
		{
			document.getElementById('new-header').classList.add('header-padding');
		}
		setTimeout(this.handleAddMessage, 10000)
	}
	
	
	render() {
		return (
			<header className="container" id="new">
				<div className="row main-row" id="new-header">
					<button className="icon" onClick={this.showSidenav}>
						<img src="/images/sidenav.png" alt="basobaas sidenav" />
					</button>
					<Link to="/" className="logo">
						<img src="/images/logo.png" alt="Basobaas" srcSet="/images/logo@2x.png 2x" />
					</Link>
					<form id="hideSearch" style={{ visibility: "visible" }} action="/search">
						<input type="search" className="form-control mr-sm-2" placeholder="Enter an address, town or property ID" aria-label="Search" name="q" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="remixicon-search-line"></i></button>
					</form>
					<div className="sidenav-menu" id="sideNav">
						<div className="black-overlay" onClick={this.showSidenav}></div>
						<div className="sidemenu">
							<div className="user">
								<div className="user-image">
									{
										this.state.isAuthenticatedBasobaas === "true" ?
											<Link to="/dashboard-menu">
												<img src={this.state.localStorage.userProfilePic} alt={this.state.localStorage.userNameBasobaas + ' Basobaas'} />
											</Link>
											:
											<a data-dismiss="modal" data-toggle="modal" data-target="#loginModal">
												<img src="/images/avatar.svg" alt="Basobaas" className="dis-none"/>
											</a>
									}

								</div>
								<div className="user-name">
									{
										this.state.isAuthenticatedBasobaas === "true" ?
											<Link to="/dashboard-menu">
												<span>{this.state.localStorage.userNameBasobaas}</span>
												<br />
												<small>See Dashboard</small>
											</Link> :
											<a href="#" data-dismiss="modal" data-toggle="modal" data-target="#loginModal" >
												<span>Log In</span>
												<br />
												<small>Sign In to explore more</small>
											</a>
									}

								</div>
							</div>

							<ul className="">
								<li>
									<Link to="/properties/for-sale">buy</Link>
								</li>
								<li>
									<Link to="/properties/for-rent">rent</Link>
								</li>
								<li>
									<Link to="/properties/premium-properties">Premium</Link>
								</li>
								<li>
									<Link to="/property-requirements">Requirements</Link>
								</li>
								<li>
									<Link to="/homeloan">Home Loan</Link>
								</li>
								<li>
									<a href="/blog" target="_blank">Blogs</a>
								</li>
								{
									this.state.isAuthenticatedBasobaas === 'true'?
									<li className="noshow">
										{
											this.state.userPhone === '' || this.state.userPhone === undefined || this.state.userPhone === null || this.state.userPhone === "null" ? (
												<Link to="/user-profile" className="btn btn-primary">Post Property Free</Link>
											):(
												<Link to="/property-form" className="btn primary-btn">Post Property Free</Link>
											)
										}
									</li>:
									<li className="noshow">
										<a  data-dismiss="modal" data-toggle="modal" data-target="#loginModal" className="btn primary-btn">Post Property Free</a>
									</li>
								}
								
							</ul>
							{
								this.state.isAuthenticatedBasobaas === 'true' ?
									<p className="user-link">
										
									</p> :
									''
							}

							{
								this.state.isAuthenticatedBasobaas === 'true' ?
									<ul className="">
										<li>
											<Link to="/my-properties">Properties</Link>
										</li>
										<li>
											<Link to="/pending-properties">Pending Properties</Link>
										</li>
										<li>
											<Link to="/leads">Leads</Link>
										</li>
										<li>
											<Link to="/user-favouries">favourites</Link>
										</li>
										<li>
											<Link to="/saved-search">Saved Searches</Link>
										</li>
										<li>
											<Link to="/user-profile">Settings</Link>
										</li>
										<li>
											<a className="text-red" onClick={this.handleLogout}>Logout</a>
										</li>
									</ul> :
									<ul className="d-none"></ul>
							}


						</div>
					</div>
					<div className="ml-auto">
						<button className="icon " onClick={this.showSearch}>
							<img src="/images/search-icon.svg" alt="basobaas search icon" />
						</button>
						{
							this.state.isAuthenticatedBasobaas === 'true' ?
								<Link to="/property-form" className="icon">
									{/* <div> */}
									<img src="/images/plus.svg" alt="basobaas sidenav" />
									{/* </div> */}
								</Link>
								:
								<button className="icon " data-dismiss="modal" data-toggle="modal" data-target="#loginModal" id="loginBtn">
									<img src="/images/plus.svg" alt="basobaas sidenav" />
								</button>
						}
					</div>
					<div className="box arrow-top" id="addNewMessage">
						<span>Add New Property</span>
						<button onClick={this.handleAddMessage}><i className="ion-close-circled"></i></button>
					</div>
				</div>
				<div id="search-box">
					<form action="/search">
						<input type="search" name="q" placeholder="Seach for areas, cities or property ID" />
					</form>
				</div>
					
			</header>
		)
	}
}
