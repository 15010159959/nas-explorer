<style>
    .vue-block .table tbody tr td {
        border: 0;
        vertical-align: middle;
    }

    .vue-block td .pagination {
        margin: 0;
        vertical-align: top;
    }

    .vue-block tr>td:first-child::after {
        content: ":";
    }
</style>
<template>
    <!-- https://etherscan.io/block/4951841 -->
    <div class="container vue-block" v-bind:triggerComputed=urlChange>
        <vue-tab-buttons class=mt20 v-bind:arr=tabButtons v-bind:tab.sync=tab></vue-tab-buttons>
        <div class=mt20></div>
        <div class=tab v-show="tab == 1">
            <h4>Block Information</h4>
            <table class="table">
                <tr>
                    <td>Height</td>
                    <td>
                        <nav aria-label="Page navigation" class="navgation-tab">
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&lt; Prev</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">1556462</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">Next &gt;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </td>
                </tr>
                <tr>
                    <td>TimeStamp</td>
                    <td>2 hrs 3 mins ago (Jan-23-2018 03:53:04 AM +UTC)</td>
                </tr>
                <tr>
                    <td>Transactions</td>
                    <td>
                        <a href="txs.html?block=%Block">274 transactions</a>
                        in this block
                    </td>
                </tr>
                <tr>
                    <td>Hash</td>
                    <td>0x4edab5c4735f10e3a8aa2297848f483858b252560dfbfbe4c9d657d55345e762</td>
                </tr>
                <tr>
                    <td>Parent Hash</td>
                    <td>
                        <a href="#">0x50780c99ac0b066b95340554c63045970e5b863776a2a0e4ab3e925c0e85d5a6</a>
                    </td>
                </tr>

                <tr>
                    <td>Mined By</td>
                    <td>
                        <a href="address.html?mined">0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5</a>
                        (Nanopool)
                    </td>
                </tr>
                <tr>
                    <td>Gas Used</td>
                    <td>7,984,916 (99.81%)</td>
                </tr>
                <tr>
                    <td>Gas Limit</td>
                    <td>8,000,029</td>
                </tr>
                <tr>
                    <td>Nonce</td>
                    <td>0x889303e4c001686f3e</td>
                </tr>
                <tr>
                    <td>Block Reward</td>
                    <td>
                        3.27657259285203186 Ether (3 + 0.27657259285203186)
                    </td>
                </tr>

            </table>
        </div>

    </div>
</template>
<script>
    var api = require("@/assets/api");

    module.exports = {
        components: {
            "vue-tab-buttons": require("@/components/vue-tab-buttons").default
        },
        computed: {
            urlChange() {
                console.log("在这里下载 block 信息, 目前的 block id 是", this.$route.params.id);


                api.getBlockById(this.$route.params.id, o => {
                    this.block = o;
                }, xhr => {
                    console.log(xhr);

                });
            }
        },
        data() {
            return {
                block: {},
                tab: 0,
                tabButtons: ["Overview"]
            };
        }
    };
</script>