<template>
    <!-- https://etherscan.io/blocks -->
    <div class=vue-blocks>
        <vue-bread v-bind:arr=breadcrumb title="Blocks"></vue-bread>

        <div class=container>
            <div class="align-items-center info-and-pagination justify-content-between mt20 row">
                <div class=col>Showing Block (#{{ heightFrom }} to #{{ heightTo }}) out of {{ totalBlocks }} total blocks</div>
                <vue-pagination class=col-auto v-bind:current=pageCurrent v-bind:total=pageTotal v-on:first=onFirst v-on:last=onLast v-on:next=onNext v-on:prev=onPrev></vue-pagination>
            </div>
            <table class="mt20 table">
                <tr>
                    <th>Height</th>
                    <th>Age</th>
                    <th>txn</th>
                    <th>Miner</th>
                    <th>GasUsed</th>
                    <th>GasLimit</th>
                    <th>Avg.GasPrice</th>
                </tr>
                <tr v-for="o in arr">
                    <td>
                        <router-link v-bind:to='"/block/" + o.miner.id'>{{ o.height }}</router-link>
                    </td>
                    <td>{{ o.timestamp }}</td>
                    <td>
                        <router-link v-bind:to='"/"'>{{ o.txnCnt }}</router-link>
                    </td>
                    <td>
                        <router-link v-bind:to='"/address/" + o.miner.hash'>{{ o.miner.alias || o.miner.hash }}</router-link>
                    </td>
                    <td>{{ o.gasUsed }}</td>
                    <td>{{ o.gasLimit }}</td>
                    <td>{{ o.avgGasPrice }}</td>
                </tr>
            </table>
            <vue-pagination v-bind:current=pageCurrent right=1 v-bind:total=pageTotal v-on:first=onFirst v-on:last=onLast v-on:next=onNext v-on:prev=onPrev></vue-pagination>
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
                arr: [],
                breadcrumb: [
                    { text: "Home", to: "/" },
                    { text: "Blocks", to: "" }
                ],
                heightFrom: 0,
                heightTo: 0,
                pageCurrent: 0,
                pageTotal: 0,
                totalBlocks: 0
            };
        },
        methods: {
            onFirst() {
                console.log("onFirst");
            },
            onLast() {
                console.log("onLast");

            },
            onNext() {
                console.log("onNext");

            },
            onPrev() {
                console.log("onPrev");
            }
        },
        mounted() {
            api.getBlockAll(o => {
                console.log(o);

                this.arr = o.data;
                this.pageCurrent = o.page;
                this.pageTotal = o.totalPage;
                this.totalBlocks = o.totalCount;

                if (this.arr.length) {
                    this.heightFrom = this.arr[0].height;
                    this.heightTo = this.arr[this.arr.length - 1].height;
                } else {
                    this.heightFrom = 0;
                    this.heightTo = 0;
                }
            });
        }
    };
</script>