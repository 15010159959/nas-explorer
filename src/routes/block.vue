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
            <table class=table v-if=block>
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
                                    &nbsp;{{ block.height }}&nbsp;
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
                    <td>{{ block.timestamp }}</td>
                </tr>
                <tr>
                    <td>Transactions</td>
                    <td>
                        <a href="txs.html?block=%Block">{{ block.txCnt }}</a>
                        in this block
                    </td>
                </tr>
                <tr>
                    <td>Hash</td>
                    <td>{{ block.hash }}</td>
                </tr>
                <tr>
                    <td>Parent Hash</td>
                    <td>
                        <a href="block.html?block=%parentHash">{{ block.parentHash }}</a>
                    </td>
                </tr>

                <tr>
                    <td>Minted</td>
                    <td>
                        <a href="address.html?mined">{{ block.miner.hash }}</a>
                        (Nanopool)
                    </td>
                </tr>
                <tr>
                    <td>Gas reward</td>
                    <td>{{ block.blkGasUsed }} {{ block.blkGasUsedRate }}</td>
                </tr>
                <tr>
                    <td>Gas Limit</td>
                    <td>{{ block.blkGasLimit }}</td>
                </tr>
                <tr>
                    <td>Nonce</td>
                    <td>{{ block.nonce }}</td>
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

                api.getBlock(this.$route.params.id, o => {
                    this.block = o;
                }, xhr => {
                    this.$router.replace("/404");
                });
            }
        },
        data() {
            return {
                block: null,
                tab: 0,
                tabButtons: ["Overview"]
            };
        }
    };
</script>