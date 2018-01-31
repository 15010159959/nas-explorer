<style>
    .vue-txs .tip a {
        color: rgb(76, 32, 133);
    }

    .vue-txs .info-and-pagination .info a {
        color: inherit;
    }

    .vue-txs td,
    .vue-txs th {
        border-top-color: #ddd;
    }

    .vue-txs .fa-arrow-right {
        color: darkgreen;
    }

    .vue-txs .fa-btc {
        color: goldenrod;
    }

    .vue-txs .fa-ok {
        color: green;
    }

    .vue-txs .fa-remove {
        color: firebrick;
    }
</style>
<template>
    <!-- https://etherscan.io/txs -->
    <div class=vue-txs>
        <vue-bread v-bind:arr=breadcrumb title=Transactions></vue-bread>

        <div class=container>
            <div class="mt20 tip">Sponsored Link: Winding Tree: Decentralized Travel Distribution. Trusted by Lufthansa, SWISS, Air New Zealand, and more!
                <a href="#">Join Now!</a>
            </div>

            <div class="info-and-pagination justify-content-between mt20 row">
                <div class="col info">More than > 145230436 transactions found (showing the last 500k records)</div>
                <vue-pagination class=col-auto></vue-pagination>
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
                    <th>[TxFee]</th>
                </tr>

                <tr>
                    <td class=ne>
                        <a href="block.html?id=%123456">%TxHash</a>
                    </td>
                    <td class=ne>%block</td>
                    <td>
                        <a href="tx.html?id=%ParentTxHash">2 mins ago</a>
                    </td>
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
                    <td>%txFee</td>
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
                    { text: "Transactions", to: "" }
                ]
            };
        }
    };
</script>