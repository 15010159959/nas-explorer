<style>
    .txs-internal .info-and-pagination .info a {
        color: inherit;
    }

    .txs-internal tr>.ne:nth-child(1),
    .txs-internal tr>.ne:nth-child(2) {
        background-color: gainsboro;
    }

    .txs-internal tr>td:nth-child(3) {
        background-color: #eaeaea;
    }

    .txs-internal td,
    .txs-internal th {
        border-top-color: #ddd;
    }

    /* .txs-internal .pagination>* {
        vertical-align: middle;
    } */
</style>
<template>
    <div class=txs-internal v-bind:triggerComputed=urlChange>
        <vue-bread v-bind:arr=breadcrumb title="Contract Internal Transactions"></vue-bread>

        <!--    info and pagination
        ============================================================ -->
        <div class=container>
            <div class="info-and-pagination justify-content-between row">
                <div class="col-auto info">
                    <div class="mt20">A Total Of %1 Internal Transactions found</div>
                    <div>
                        (showing the last %2 records only)
                        <label>
                            <!-- don't forget other parameters -->
                            <a href="?type=all">
                                <!-- to check a radio, add "checked" attribute, i.e. <input type=radio name=type value=all checked> -->
                                <input type=radio name=type value=all>
                                <b>All Types</b>
                            </a>
                        </label>
                        <label>
                            <a href="?type=noerror">
                                <input type=radio name=type value=noerror>
                                <b>No Errors</b>
                            </a>
                        </label>
                        <label>
                            <a href="?type=error">
                                <input type=radio name=type value=error>
                                <b>With Errors</b>
                            </a>
                        </label>
                    </div>
                </div>
                <vue-pagination class="col-auto mt20"></vue-pagination>
            </div>
            <!--    the table
                ============================================================ -->
            <table class="mt20 table">
                <tr>
                    <th>Block</th>
                    <th>Age</th>
                    <th>ParentTxHash</th>
                    <th>Type</th>
                    <th>From</th>
                    <th></th>
                    <th>To</th>
                    <th>Value</th>
                </tr>

                <tr>
                    <!-- ne = none empty, this class is required to set background-color -->
                    <td class=ne>
                        <a href="block.html?id=%123456">%Block</a>
                    </td>
                    <td class=ne>%Age</td>
                    <td>
                        <span class="fa fa-check" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <span class="fa fa-btc" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <span class="fa fa-check" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <span class="fa fa-check" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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

                <tr>
                    <td class=ne>
                        <a href="block.html?b=123456">%Block</a>
                    </td>
                    <td class=ne>%Age</td>
                    <td>
                        <span class="fa fa-remove" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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

                <tr>
                    <td class=ne>
                        <a href="block.html?b=123456">%Block</a>
                    </td>
                    <td class=ne>%Age</td>
                    <td>
                        <span class="fa fa-check" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <span class="fa fa-check" aria-hidden="true"></span>
                        <a href="tx.html?id=%ParentTxHash">%ParentTxHash</a>
                    </td>
                    <td>%Type</td>
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
    </div>
</template>
<script>
    var api = require("@/assets/api");

    module.exports = {
        components: {
            "vue-bread": require("@/components/vue-bread").default,
            "vue-pagination": require("@/components/vue-pagination").default
        },
        computed: {
            urlChange() {
                console.log("在这里下载 txs-internal 信息, 目前的 txs-internal id 是", this.$route.params.id);

                // api.getShowcases(this.$root.apiLang, t => {
                //     this.arr = t;
                // });
            }
        },
        data() {
            return {
                arr: {},
                breadcrumb: [
                    { text: "Home", to: "/" },
                    { text: "Internal Transactions", to: "" }
                ],
                type: "all" // all, ok, error
            };
        }
    };
</script>