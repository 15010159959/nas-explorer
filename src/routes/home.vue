<style>
    .vue-home .container {
        background-color: #f7f7f7;
    }

    .vue-home .mt16 {
        margin-top: 16px;
    }

    .vue-home .banner {
        margin-top: 20px;
    }

    .vue-home .banner_left {
        height: 800px;
        /* background-color: gray; */
    }

    .vue-home .banner_left .list_left {
        width: 100%;
        height: 725px;
        overflow: auto;
        /* border:2px solid black; */
    }

    .vue-home .banner_left .list_tab {
        width: 100%;
        height: 60px;
        border-bottom: 3px solid #f7f7f7;
        background-color: #fff;
        position: relative;
    }

    .vue-home .banner_left .list_tab .img {
        position: absolute;
        top: 33%;
        left: 2%;
        font-size: 16px;
    }

    .vue-home .banner_left .list_tab .btn {
        position: absolute;
        right: 2%;
        top: 20%;
    }

    .vue-home .list_left li {
        width: 100%;
        height: 120px;
        border-bottom: 4px solid #f7f7f7;
        background-color: #fff;
        position: relative;
    }

    .vue-home .banner_right {
        height: 800px;
        /* background-color: blue; */
    }

    .vue-home .banner_right .list_right {
        width: 100%;
        height: 725px;
        overflow: auto;
        /* border:2px solid black; */
    }

    .vue-home .banner_right .list_tab {
        width: 100%;
        height: 60px;
        border-bottom: 3px solid #f7f7f7;
        background-color: #fff;
        position: relative;
    }

    .vue-home .banner_right .list_tab .img {
        position: absolute;
        top: 33%;
        left: 2%;
        font-size: 16px;
    }

    .vue-home .banner_right .list_tab .btn {
        position: absolute;
        right: 2%;
        top: 20%;
    }

    .vue-home .list_right li {
        width: 100%;
        height: 120px;
        border-bottom: 4px solid #f7f7f7;
        background-color: #fff;
        border-left: 2px solid;
        position: relative;
    }

    /* 右侧列表 状态不同 左边框有不同的状态颜色, 目前不知道啥状态所以是按顺序给颜色 */

    .vue-home .list_right li:nth-of-type(4n + 1) {
        border-left-color: #3cba54;
    }

    .vue-home .list_right li:nth-of-type(4n + 2) {
        border-left-color: #f4c20d;
    }

    .vue-home .list_right li:nth-of-type(4n + 3) {
        border-left-color: #db3236;
    }

    .vue-home .list_right li:nth-of-type(4n + 4) {
        border-left-color: #4885ed;
    }

    .vue-home .list_right .list_2_2 {
        width: 100%;
        height: 120px;
        border-bottom: 4px solid #f7f7f7;
        background-color: #fff;
        border-left: 2px solid gray;
        position: relative;
    }

    .vue-home .list_right .list_2_3 {
        width: 100%;
        height: 120px;
        border-bottom: 4px solid #f7f7f7;
        background-color: #fff;
        border-left: 2px solid red;
        position: relative;
    }

    .vue-home .list_banner_left {
        background-color: gray;
        width: 30%;
        height: 90px;
        position: absolute;
        left: 2%;
        top: 12%;
        color: #fff;
    }

    .vue-home .list_banner_left p {
        margin-left: 38px;
        margin-top: 18px;
    }

    .vue-home .list_banner_left_p1 {
        margin-left: 40px;
    }

    .vue-home .list_banner_left a {
        color: #fff;
    }

    .vue-home .list_banner_right {
        width: 60%;
        height: 90px;
        position: absolute;
        left: 34%;
        top: 12%;
        padding-top: 3%;
    }

    .vue-home .list_right_banner_left {
        width: 10%;
        height: 80px;
        position: absolute;
        top: 4%;
        left: 2%;
    }

    .vue-home .list_right_banner_right {
        width: 80%;
        height: 90px;
        position: absolute;
        left: 14%;
        top: 12%;
    }

    .vue-home .list_right_banner_right p {
        width: 80%;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .vue-home #chart{
            max-width:800px;
            height:278px;
        }
    .vue-home .chart_banner .name,.value{
        color:black;
        border-bottom: 1px inset;
        margin-left: 12px;
        margin-right: 12px;
    }
    .vue-home .chart_banner .name{
        font-size: 30px;
    }
    .vue-home .chart_banner .value{
        font-size: 60px;
    }
    .vue-home .chart_banner .msg{
        color: black;
        font-size:16px; 
        margin-top: 24px;
    }
    .vue-home .chart_banner .msg div{
        margin-top: 10px;
    }
    .vue-home .chart_banner .msg .msg_change_right{
        float: right;
        margin-right: 10px;
    }
    .vue-home .chart_banner .msg .msg_change_left{
        margin-left: 10px;
    }

    .vue-home text.highcharts-credits {
        display: none;
    }
</style>
<template>

    <div class="container vue-home">
        <div class="top">
            <div class="row">
                <div class="col-md-8">
                    <div id="chart" style="max-width:800px;height:300px;"></div>
                </div>
                <div class="col-md-4">
                    <div class="chart_banner">
                        <div class="name">NAS</div>
                        <div class="value">$66.66</div>
                        <div class="msg">
                            <div class="msg_change">
                                <span class="msg_change_left">24h Change : </span>
                                <span class="msg_change_right red">0%</span>
                            </div>
                            <div class="msg_volume">
                                <span class="msg_change_left">24h Volume :</span>
                                <span class="msg_change_right">$12388.16</span>
                            </div>
                            <div class="msg_market">
                                <span class="msg_change_left">Market Cap :</span>
                                <span class="msg_change_right">$154542132</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="row">
                <div class="col-md-6 banner_left">
                    <div class="list_tab">
                        <div class="img">
                            <span class="fa fa-th-large" aria-hidden="true"></span>
                            Blocks
                        </div>
                        <a class="btn btn-default pull-right" href="txs.html?id=%block" role="button">View All</a>
                    </div>
                    <ul class="list_left">
                        <li v-for="o in blocks">
                            <div class=list_banner_left>
                                <p>
                                    <router-link v-bind:to="/block/ + o.height"> block {{ o.height }}</router-link>
                                </p>
                                <p class="list_banner_left_p1">{{ o.timestamp }}</p>
                            </div>
                            <div class=" list_banner_right">
                                Mined By
                                <a href="address.html?id=%From">{{ o.miner.hash }}</a>
                                <p class="mt16">
                                    <a href="txs.html?id=%Block">
                                        <b>{{ o.txnCnt }}</b>
                                    </a>
                                    in 5 secs</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 banner_right ">
                    <div class="list_tab ">
                        <div class="img ">
                            <span class="fa fa-list" aria-hidden="true"></span>
                            Transation
                        </div>
                        <a class="btn btn-default pull-right" href="txs.html?id=%txs" role="button">View All</a>
                    </div>
                    <ul class="list_right ">
                        <li v-for="o in txs">
                            <div class="list_right_banner_left ">
                                <img src="/static/img/icon.png " height="42 " width="34 " alt=" ">
                            </div>
                            <div class="list_right_banner_right ">
                                <p>
                                    TX#
                                    <router-link v-bind:to="/tx/ + o.hash">{{ o.hash }}</router-link>
                                </p>
                                <p>
                                    From
                                    <router-link v-bind:to="/address/ + o.from">{{ o.from }}</router-link>
                                    To
                                    <router-link v-bind:to="/block/ + o.to">{{ o.to }} </router-link>
                                </p>
                                <p>Amount 0 Ether</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var api = require("@/assets/api");

    module.exports = {
        data() {
            return {
                blocks: [],
                txs: []
            };
        },
        methods: {
            setUpChart() {
                var Highcharts = require("highcharts"),
                    chart = Highcharts.chart('chart', {
                        title: {
                            text: 'transations'
                        },
                        subtitle: {
                            text: '数据来源：Nebulas'
                        },
                        yAxis: {
                            title: {
                                text: '数量'
                            }
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        plotOptions: {
                            series: {
                                label: {
                                    connectorAllowed: false
                                },
                                pointStart: 2010
                            }
                        },
                        series: [{
                            name: 'transation',
                            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                        }],
                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    legend: {
                                        layout: 'horizontal',
                                        align: 'center',
                                        verticalAlign: 'bottom'
                                    }
                                }
                            }]
                        }
                    });
            }
        },
        mounted() {

            this.setUpChart();

            api.getBlock("latest", o => {
                this.blocks = o;
            }, xhr => {
                console.log(xhr);

            });

            api.getTx("latest", o => {
                this.txs = o;
            }, xhr => {
                console.log(xhr);

            });
        }

    };



</script>