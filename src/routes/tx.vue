<style>
    .vue-tx .table tbody tr td {
        border: 0;
    }

    .vue-tx textarea {
        width: 100%;
    }

    .vue-tx tr>td:first-child::after {
        content: ":";
    }
</style>
<template>
    <div class="container vue-tx">
        <vue-tab-buttons class=mt20 v-bind:arr=tabButtons v-bind:tab.sync=tab></vue-tab-buttons>
        <div class=mt20></div>
        
        <div class=tab v-show="tab == 1">
            <h3>Transation Information</h3>
            <table class=table>
                <tr>
                    <td>TxHash</td>
                    <td>0xefc6ad4318bfce85b06e1d3768c5dd1b8a008a281aac21bbd6d8568d2bd3af5a</td>
                </tr>
                <tr>
                    <td>TxReceipt Status</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td>Block Height</td>
                    <td>
                        <a href="#">45612588</a>
                        (210 block confirmations)
                    </td>
                </tr>
                <tr>
                    <td>TimeStamp</td>
                    <td>49 mins ago (Jan-23-2018 03:53:22 AM +UTC)</td>
                </tr>
                <tr>
                    <td>From</td>
                    <td>0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347</td>
                </tr>
                <tr>
                    <td>To</td>
                    <td>
                        Contract
                        <a href="#">0x6cace0528324a8afc2b157ceba3cdd2a27c4e21f</a>
                    </td>
                </tr>
                <tr>
                    <td>Value</td>
                    <td>0 Ether ($0.00)</td>
                </tr>
                <tr>
                    <td>Gas Limit</td>
                    <td>8,000,029</td>
                </tr>
                <tr>
                    <td>Gas Used By Txn</td>
                    <td>154684213</td>
                </tr>
                <tr>
                    <td>Gas Price</td>
                    <td>0.000000005 Ether (5 Gwei)</td>
                </tr>
                <tr>
                    <td>Actual Tx Cost/Fee</td>
                    <td>0.000925515 Ether ($0.92)</td>
                </tr>
                <tr>
                    <td>Cumulative Gas Used</td>
                    <td>123454321525</td>
                </tr>
                <tr>
                    <td>Nonce</td>
                    <td>1234543</td>
                </tr>
                <tr>
                    <td>Input Data</td>
                    <td>
                        <textarea rows="7"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Private Note</td>
                    <td>&lt;To access the private Note feature, you must be logged in></td>
                </tr>
            </table>
        </div>

        <div class=tab v-show="tab == 2">
            <h3>Internal Transactions</h3>
        </div>
        
        <div class=tab v-show="tab == 3">
            <h3>Event Logs</h3>
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


                api.getTxByHash(this.$route.params.id, o => {
                    this.block = o;
                }, xhr => {
                    console.log(xhr);

                });
            }
        },
        data() {
            return {
                // block: {},
                tab: 0,
                tabButtons: ["Overview", "Internal Transactions", "Event Logs"]
            };
        }
    };
</script>