<style>
    .vue-address td.out {
        width: 50px;
    }

    .vue-address td.out::before {
        background-color: #e67e22;
        border-radius: 4px;
        color: white;
        content: "out";
        padding: 3px 5px;
    }

    .vue-address .container .table th {
        border-top: 0;
    }

    .vue-address .container .title {
        overflow: auto;
    }

    .vue-address .txfee {
        color: silver;
    }
</style>
<template>
    <div class=vue-address>
        <!-- https://etherscan.io/address/0xea674fdde714fd979de3edf0f56aa9716b898ec8 -->
        <vue-bread v-bind:arr=breadcrumb title="Address %Address"></vue-bread>
        <div class=container>
            <table class="c333 table">
                <tr>
                    <th>
                        Overview
                        <span class="c777"> | Ethermine</span>
                    </th>
                    <th class="text-right">
                        * uncomment this img tag
                        <!-- <img src=%qrcode> -->
                    </th>
                </tr>
                <tr>
                    <td>ETH Balance:</td>
                    <td>%xxx</td>
                </tr>
                <tr>
                    <td>Mined:</td>
                    <td>%xxx</td>
                </tr>
                <tr>
                    <td>No Of Transactions:</td>
                    <td>%xxx</td>
                </tr>
            </table>

            <vue-tab-buttons class=mt20 v-bind:arr=tabButtons v-bind:tab.sync=tab></vue-tab-buttons>
            <div class=mt20></div>

            <!--    Transactions
                ============================================================ -->
            <div class=tab v-show="tab == 1">
                <div class="align-items-center justify-content-between row title">
                    <div class=col>
                        <span class="c333 fa fa-sort-amount-desc" aria-hidden="true"></span>
                        Latest %1 txns from a total Of
                        <a href="txs.html">%2</a>
                    </div>
                    <div class=col-auto>
                        <a class="btn btn-link" href="txs.html?id=%id-from-url" role=button>View All</a>
                    </div>
                </div>

                <table class="mt20 table">
                    <tr>
                        <th>TxHash</th>
                        <th>Block</th>
                        <th>Age</th>
                        <th>From</th>
                        <th></th>
                        <th>To</th>
                        <th>Value</th>
                        <th class="txfee">[TxFee]</th>
                    </tr>

                    <tr>
                        <td>
                            <a href="tx.html?id=%TxHash">%TxHash</a>
                        </td>
                        <td>
                            <a href="block.html?id=%Block">%Block</a>
                        </td>
                        <td>%Age</td>
                        <td>%From</td>
                        <td class="out text-uppercase"></td>
                        <td>
                            <a href="address.html?id=%To">%To</a>
                        </td>
                        <td>%Value</td>
                        <td class="txfee">%TxFee</td>
                    </tr>
                </table>
            </div>

            <!--    Mined Blocks
                ============================================================ -->
            <div class=tab v-show="tab == 2">
                <div class="align-items-center justify-content-between row title">
                    <div class=col>
                        <span class="c333 fa fa-sort-amount-desc" aria-hidden=true></span>
                        Latest %1 blocks (From a total of
                        <a href="blocks.html?m=%id-from-url">%2</a> with %3 mined)
                    </div>
                    <div class=col-auto>
                        <a class="btn btn-link" href="blocks.html?id=%id-from-url" role=button>View All</a>
                    </div>
                </div>

                <table class="mt20 table">
                    <tr>
                        <th>Block</th>
                        <th>Age</th>
                        <th>txn</th>
                        <th>Difficulty</th>
                        <th>GasUsed</th>
                        <th>Reward</th>
                    </tr>

                    <tr>
                        <td>
                            <a href="block.html?id=%Block">%Block</a>
                        </td>
                        <td>%Age</td>
                        <td>%txn</td>
                        <td>%Difficulty</td>
                        <td>%GasUsed</td>
                        <td>%Reward</td>
                    </tr>
                </table>
            </div>

            <!--    Mined Uncles
                ============================================================ -->
            <!-- <div class=tab v-show="tab == 3">
                <div class="align-items-center justify-content-between row title">
                    <div class=col>
                        <span class="c333 fa fa-sort-amount-desc" aria-hidden="true"></span>
                        Latest %1 uncles (From a total of
                        <a href="uncles.html?id=%id-from-url">%2</a> with %3 mined)
                    </div>
                    <div class=col-auto>
                        <a class="btn btn-link" href="uncles.html?id=%id-from-url" role=button>View All</a>
                    </div>
                </div>

                <table class="mt20 table">
                    <tr>
                        <th>Block</th>
                        <th>Age</th>
                        <th>UncleNumber</th>
                        <th>Difficulty</th>
                        <th>GasUsed</th>
                        <th>Reward</th>
                    </tr>

                    <tr>
                        <td>
                            <a href="block.html?id=%Block">%Block</a>
                        </td>
                        <td>%Age</td>
                        <td>
                            <a href="uncle.html?id=%perhaps-uncle-id">%UncleNumber</a>
                        </td>
                        <td>%Difficulty</td>
                        <td>%GasUsed</td>
                        <td>%Reward</td>
                    </tr>
                </table>
            </div> -->

        </div>
    </div>
</template>
<script>
    var api = require("@/assets/api");

    module.exports = {
        components: {
            "vue-bread": require("@/components/vue-bread").default,
            "vue-pagination": require("@/components/vue-pagination").default,
            "vue-tab-buttons": require("@/components/vue-tab-buttons").default
        },
        data() {
            return {
                breadcrumb: [
                    { text: "Home", to: "/" },
                    { text: "Normal Accounts", to: "accounts" },
                    { text: "Address", to: "" }
                ],
                tab: 0,
                tabButtons: ["Transactions", "Mined Blocks"]
            };
        }
    };
</script>