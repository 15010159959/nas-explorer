<template>
    <!-- https://etherscan.io/blocks -->
    <div class=vue-blocks>
        <vue-bread v-bind:arr=breadcrumb title="Blocks"></vue-bread>

        <div class=container>
            <div class="info-and-pagination justify-content-between mt20 row">
                <div class=col>Showing Block (%1 to %2) out of %3 total blocks</div>
                <vue-pagination class=col-auto></vue-pagination>
            </div>

            <table class=table>
                <tr>
                    <th>Height</th>
                    <th>Age</th>
                    <th>txn</th>
                    <th>Uncles</th>
                    <th>Miner</th>
                    <th>GasUsed</th>
                    <th>GasLimit</th>
                    <th>Avg.GasPrice</th>
                    <th>Reward</th>
                </tr>

                <tr>
                    <td>
                        <a href="block.html?id=%Block">%Height</a>
                    </td>
                    <td>%Age</td>
                    <td>
                        <a href="txs.html?block=%Block">%txn</a>
                    </td>
                    <td>%Uncles</td>
                    <td>
                        <a href="address.html?id=%Address">%Miner</a>
                    </td>
                    <td>%GasUsed</td>
                    <td>%GasLimit</td>
                    <td>%Avg.GasPrice</td>
                    <td>%Reward</td>
                </tr>
            </table>

            <vue-pagination right=1></vue-pagination>
        </div>
    </div>
</template>
<script>
    var api = require("@/assets/api");

    module.exports = {
        components: {
            "vue-bread": require("@/components/vue-bread").default,
            "vue-pagination": require("@/components/vue-pagination").default
        },
        data() {
            return {
                breadcrumb: [
                    { text: "Home", to: "/" },
                    { text: "Blocks", to: "" }
                ]
            };
        }
    };
</script>