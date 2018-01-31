<template>
    <!-- https://etherscan.io/accounts  -->
    <div class=vue-accounts>
        <vue-bread v-bind:arr=breadcrumb title="All Accounts"></vue-bread>

        <div class="container mt20">
            <div class="info-and-pagination justify-content-between row">
                <div class=col>
                    A total of %(more than > 1999999) accounts found (%1 Ether)
                    <br>
                    <em>Displaying the last %2 records only</em>
                </div>
                <vue-pagination class=col-auto></vue-pagination>
            </div>

            <table class="mt20 table">
                <tr>
                    <th>Rank</th>
                    <th>Address</th>
                    <th>Balance</th>
                    <th>Percentage</th>
                    <th>TxCount</th>
                </tr>
                <tr>
                    <td>%Rank</td>
                    <td>
                        <a href="address.html?id=%Address">%Address</a>
                    </td>
                    <td>%Balance</td>
                    <td>%Percentage</td>
                    <td>%TxCount</td>
                </tr>
                <tr>
                    <td>%Rank</td>
                    <td>
                        <a href="address.html?id=%Address">%Address</a>
                        <span> | whatever</span>
                    </td>
                    <td>%Balance</td>
                    <td>%Percentage</td>
                    <td>%TxCount</td>
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
                    { text: "Accounts", to: "" }
                ]
            };
        }
    };
</script>