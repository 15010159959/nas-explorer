<style>
    .vue-header a {
        color: inherit;
    }

    @media (min-width: 992px) {
        .vue-header .navbar-nav>li>a:hover,
        .vue-header .navbar-nav>li.active>a,
        .vue-header .navbar-nav>li.show>a {
            border-bottom: 2px solid #3498db;
        }

        .vue-header.navbar.navbar-default .navbar-nav>li>a {
            background-color: initial;
        }
    }

    @media (max-width: 991px) {
        .vue-header .form-inline {
            align-items: center;
            display: flex;
        }

        .vue-header .form-inline input {
            flex: 1;
            margin: 0 10px 0;
        }
    }
</style>
<template>
    <nav class="bg-light navbar navbar-expand-lg navbar-light vue-header">
        <div class=container>
            <router-link to=/ class=navbar-brand>Explorer</router-link>
            <button class=navbar-toggler type=button data-toggle=collapse data-target=#navbarSupportedContent aria-controls=navbarSupportedContent aria-expanded=false aria-label="Toggle navigation">
                <span class=navbar-toggler-icon></span>
            </button>
            <div class="collapse navbar-collapse" id=navbarSupportedContent>
                <ul class="navbar-nav mr-auto">
                    <li class=nav-item v-bind:class="{ active: $route.meta.headerActive == 1 }">
                        <router-link to=/ class=nav-link>HOME
                            <span class=sr-only>(current)</span>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown" v-bind:class="{ active: $route.meta.headerActive == 2 }">
                        <a class="nav-link dropdown-toggle" href=# id=navbarDropdown1 role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>BLOCKCHAIN</a>
                        <div class=dropdown-menu aria-labelledby="navbarDropdown1">
                            <router-link class=dropdown-item to=/txs>View Txns</router-link>
                            <router-link class=dropdown-item to=/txs/pending>View Pending Txns</router-link>
                            <router-link class=dropdown-item to=/blocks>View Blocks</router-link>
                        </div>
                    </li>
                    <li class="nav-item dropdown" v-bind:class="{ active: $route.meta.headerActive == 3 }">
                        <a class="nav-link dropdown-toggle" href=# id=navbarDropdown2 role=button data-toggle=dropdown aria-haspopup=true aria-expanded=false>ACCOUNT</a>
                        <div class=dropdown-menu aria-labelledby=navbarDropdown2>
                            <router-link class=dropdown-item to=/accounts>ALL Accounts</router-link>
                        </div>
                    </li>
                    <!-- <li class=nav-item v-bind:class="{ active: $route.meta.headerActive == 4 }">
                        <a class=nav-link href=#>TOKEN
                            <span class=sr-only>(current)</span>
                        </a>
                    </li>
                    <li class=nav-item>
                        <a class=nav-link href=#>CHART
                            <span class=sr-only>(current)</span>
                        </a>
                    </li>
                    <li class=nav-item>
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li> -->
                </ul>
                <form class=form-inline>
                    <input id="search_value" class="form-control mr-sm-2" type=search placeholder=Search>
                    <button id="search" class="btn btn-outline-success" type=submit>GO</button>
                </form>
            </div>
        </div>
    </nav>
</template>
<script>

    module.exports = {

        mounted() {
            $(document).ready(function () {

                $("#search").click(function () {
                    var result1 = $("#search_value").val();
                    alert("url = " + "search?q=" + result1);
                    window.location.href = "url = " + "search?q=" + result1;
                });

            })
        }

    };
</script>