<style>
    .vue-txs-pending .tip a {
        color: blue;
    }
</style>
<template>
    <div class=vue-txs-pending>
        <vue-bread v-bind:arr=breadcrumb title="Pending Transactions"></vue-bread>

        <div class=container>
            <div class="mt20 tip">Tip: Check out the
                <a href="#">Pending Transaction Pool - Time Series</a>
            </div>

            <div class="info-and-pagination justify-content-between mt20 row">
                <div class=col>A total of %1 Pending txns found</div>
                <vue-pagination class=col-auto></vue-pagination>
            </div>

            <table class="mt20 table">
                <tr>
                    <th>TxHash</th>
                    <th>LastSeen</th>
                    <th>GasLimit</th>
                    <th>GasPrice</th>
                    <th>From</th>
                    <th></th>
                    <th>To</th>
                    <th>Value</th>
                </tr>

                <tr>
                    <td class=ne>
                        <a href="block.html?id=%123456">%TxHash</a>
                    </td>
                    <td class=ne>%secs ago</td>
                    <td>
                        <a href="tx.html?id=%ParentTxHash">21000</a>
                    </td>
                    <td>52.5 Gwei</td>
                    <td>
                        <a href="address.html?id=%From">%From</a>
                    </td>
                    <td>
                        <span class="fa fa-arrow-right" aria-hidden="true"></span>
                    </td>
                    <td>
                        <a href="address.html?id=%To">%To</a>
                    </td>
                    <td>%Value</td>
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
                    { text: "Pending Transactions", to: "" }
                ]
            };
        }
    };
</script>