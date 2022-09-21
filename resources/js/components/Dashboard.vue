<template>
    <!-- Vertical navbar -->
<div class="vertical-nav bg-white" id="sidebar">
  <div class="py-4 px-3 mb-4 bg-light">
    <div class="media d-flex align-items-center"><img src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
      <div class="media-body">
        <h4 class="m-0">Njeri Ndungu</h4>
        <p class="font-weight-light text-muted mb-0">Business owner</p>
      </div>
    </div>
  </div>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <a href="#" class="nav-link text-dark bg-light">
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                Home
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                About
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                Services
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                Gallery
            </a>
    </li>
  </ul>

  <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>

  <ul class="nav flex-column bg-white mb-0">
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                Area charts
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                Bar charts
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                Pie charts
            </a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link text-dark ">
                <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                Line charts
            </a>
    </li>
  </ul>
</div>
<!-- End vertical navbar -->


<!-- Page content holder -->
<div class="page-content p-5" id="content">
    
  <!-- Toggle button -->
  <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small></button>

  <!-- First Row [Statistics]-->
  <h2 class="font-weight-bold mb-2">Latest Statistics</h2>
  <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

  <div class="row pb-5">
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card-->
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-5"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h5>Products Sales</h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="progress rounded-pill">
            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card -->
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-5"><i class="fa fa-tasks fa-2x mb-3 text-success"></i>
          <h5>Completed Tasks</h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="progress rounded-pill">
            <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;" class="progress-bar bg-success rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <!-- Card -->
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-5"><i class="fa fa-user-circle-o fa-2x mb-3 text-info"></i>
          <h5>New Users</h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="progress rounded-pill">
            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar bg-info rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Card -->
    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div class="card rounded shadow-sm border-0">
        <div class="card-body p-5"><i class="fa fa-shopping-bag fa-2x mb-3 text-warning"></i>
          <h5>New Products</h5>
          <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="progress rounded-pill">
            <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;" class="progress-bar bg-warning rounded-pill"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Demo content -->
  <h2 class="display-4 ">Bootstrap vertical nav</h2>
  <p class="lead  mb-0">Build a fixed sidebar using Bootstrap 4 vertical navigation and media objects.</p>
  <p class="lead ">Gorcery Management</p>
  <div class="separator"></div>
  <div class="row">
    <div class="col-lg-7">
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
      <div class="bg-white p-5 rounded my-5 shadow-sm">
        <p class="lead mb-0 text-muted">"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
    </div>
    <div class="col-lg-5">
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor.
      </p>
    </div>
  </div>

</div>
<!-- End demo content -->
</template>

<script>
export default({
    name: 'Dashboard',
    data()
    {
        
    },
    methods:
    {

    },
});

$(function() {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
});
</script>
<style scoped>

.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}


body {
  background: #599fd9;
  background: -webkit-linear-gradient(to right, #599fd9, #c2e59c);
  background: linear-gradient(to right, #599fd9, #c2e59c);
  min-height: 100vh;
  overflow-x: hidden;
}
.separator {
  margin: 3rem 0;
  border-bottom: 1px dashed #fff;
}

.text-uppercase {
  letter-spacing: 0.1em;
}

.text-gray {
  color: #aaa;
}
</style>
