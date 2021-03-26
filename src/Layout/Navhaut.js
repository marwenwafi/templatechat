import React, { Component } from 'react'  
  
export class Navhaut extends Component {  
    render() {  
        return (
            <div class="wrapper">

            <header class="main-header">
	<div class="d-flex align-items-center logo-box pl-10">		
		<a href="#" class="waves-effect waves-light nav-link rounded d-none d-md-inline-block push-btn" data-toggle="push-menu" role="button">
			<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/collapse.svg" class="img-fluid svg-icon" alt=""/>
		</a>
		<a href="index.html" class="logo">
		  <div class="logo-lg">
			  <span class="light-logo"><img src="../images/logo-dark-text.png" alt="logo"/></span>
			  <span class="dark-logo"><img src="../images/logo-light-text.png" alt="logo"/></span>
		  </div>
		</a>
	</div> 
          <nav class="navbar navbar-static-top pl-10">
      
	  <div class="app-menu">
		<ul class="header-megamenu nav">
			<li class="btn-group nav-item d-md-none">
				<a href="#" class="waves-effect waves-light nav-link rounded push-btn" data-toggle="push-menu" role="button">
					<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/collapse.svg" class="img-fluid svg-icon" alt=""/>
			    </a>
			</li>
			<li class="btn-group nav-item d-none d-lg-inline-block">
				<a id="chat-popup" href="#" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
					<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/sms.svg" class="img-fluid svg-icon" alt=""/>
			    </a>
			</li>
			
			<li class="btn-group nav-item d-none d-lg-inline-block">
				<a href="extra_taskboard.html" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
					<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/correct.svg" class="img-fluid svg-icon" alt=""/>
			    </a>
			</li>
			<li class="btn-group nav-item d-none d-lg-inline-block">
				<a href="extra_calendar.html" class="waves-effect waves-light nav-link rounded svg-bt-icon" title="">
					<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/event.svg" class="img-fluid svg-icon" alt=""/>
			    </a>
			</li>
			
		</ul> 
	  </div>
		
      <div class="navbar-custom-menu r-side">
        <ul class="nav navbar-nav">	
			<li class="btn-group nav-item">
				<a href="#" data-provide="fullscreen" class="waves-effect waves-light nav-link rounded full-screen" title="Full Screen">
					<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/fullscreen.svg" class="img-fluid svg-icon" alt=""/>
			    </a>
			</li>	  
			<li class="btn-group d-md-inline-flex d-none">
				<div class="app-menu">
					<div class="search-bx mx-5">
						<form>
							<div class="input-group">
							  <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
							  <div class="input-group-append">
								<button class="btn" type="submit" id="button-addon3"><img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/search.svg" class="img-fluid" alt="search"/></button>
							  </div>
							</div>
						</form>
					</div>
				</div>
			</li>
		  
		  <li class="dropdown notifications-menu">
			<a href="#" class="waves-effect waves-light dropdown-toggle" data-toggle="dropdown" title="Notifications">
			  <img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/notifications.svg" class="img-fluid svg-icon" alt=""/>
			</a>
			<ul class="dropdown-menu animated bounceIn">

			  <li class="header">
				<div class="p-20">
					<div class="flexbox">
						<div>
							<h4 class="mb-0 mt-0">Notifications</h4>
						</div>
						<div>
							<a href="#" class="text-danger">Clear All</a>
						</div>
					</div>
				</div>
			  </li>

			  <li>
				
				<ul class="menu sm-scrol">
				  <li>
					<a href="#">
					  <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in semper diam posuere.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor pretium a erat.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-user text-primary"></i> Nunc fringilla lorem 
					</a>
				  </li>
				  <li>
					<a href="#">
					  <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
					</a>
				  </li>
				</ul>
			  </li>
			  <li class="footer">
				  <a href="#">View all</a>
			  </li>
			</ul>
		  </li>	
		  
	      
          <li class="dropdown user user-menu">
            <a href="#" class="waves-effect waves-light dropdown-toggle" data-toggle="dropdown" title="User">
				<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/user.svg" class="rounded svg-icon" alt="" />
            </a>
            <ul class="dropdown-menu animated flipInX">
             
              <li class="user-header bg-img" style={{'background-image': 'url(../images/user-info.jpg)'}} data-overlay="3">
				  <div class="flexbox align-self-center">					  
				  	<img src="../images/avatar/7.jpg" class="float-left rounded-circle" alt="User Image"/>					  
					<h4 class="user-name align-self-center">
					  <span>Samuel Brus</span>
					  <small>samuel@gmail.com</small>
					</h4>
				  </div>
              </li>
              
              <li class="user-body">
				    <a class="dropdown-item" href="javascript:void(0)"><i class="ion ion-person"></i> My Profile</a>
					<a class="dropdown-item" href="javascript:void(0)"><i class="ion ion-bag"></i> My Balance</a>
					<a class="dropdown-item" href="javascript:void(0)"><i class="ion ion-email-unread"></i> Inbox</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="javascript:void(0)"><i class="ion ion-settings"></i> Account Setting</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="javascript:void(0)"><i class="ion-log-out"></i> Logout</a>
					<div class="dropdown-divider"></div>
					<div class="p-10"><a href="javascript:void(0)" class="btn btn-sm btn-rounded btn-success">View Profile</a></div>
              </li>
            </ul>
          </li>	
		  
          
          <li>
              <a href="#" data-toggle="control-sidebar" title="Setting" class="waves-effect waves-light">
			  	<img src="https://www.multipurposethemes.com/admin/chat-bot-admin-template/images/svg-icon/settings.svg" class="img-fluid svg-icon" alt=""/>
			  </a>
          </li>
			
        </ul>
      </div>
    </nav>
    </header>
    </div>
        )
        }



    }
export default Navhaut;