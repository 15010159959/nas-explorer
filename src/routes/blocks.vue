<template>
    <!-- https://etherscan.io/blocks -->
    <div class=vue-blocks>
        <vue-bread v-bind:arr=breadcrumb title="Blocks"></vue-bread>

        <div class=container>
            <div class="align-items-center info-and-pagination justify-content-between mt20 row">
                <div class=col>Showing Block (#{{ heightFrom }} to #{{ heightTo }}) out of {{ totalBlocks }} total blocks</div>
                <vue-pagination class=col-auto v-bind:current=currentPage v-bind:total=totalPage v-on:first=onFirst v-on:last=onLast v-on:next=onNext v-on:prev=onPrev></vue-pagination>
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
            <vue-pagination v-bind:current=currentPage right=1 v-bind:total=totalPage v-on:first=onFirst v-on:last=onLast v-on:next=onNext v-on:prev=onPrev></vue-pagination>
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
                ajaxing: false,
                arr: [],
                breadcrumb: [
                    { text: "Home", to: "/" },
                    { text: "Blocks", to: "" }
                ],
                currentPage: 0,
                heightFrom: 0,
                heightTo: 0,
                totalBlocks: 0,
                totalPage: 1 // 为了允许 mounted 调用 nthTxPage
            };
        },
        methods: {
            nthTxPage(p) {
                if (p)
                    if (0 < p && p < this.totalPage + 1)
                        if (p == this.currentPage)
                            console.log("nthTxPage - 请求的第", p, "页正是当前页, 忽略此次调用");
                        else if (this.ajaxing)
                            console.log("nthTxPage - 上一个 ajax 还未返回, 忽略此次调用");
                        else {
                            this.ajaxing = true;

                            api.getBlock({ p }, o => {
                                this.ajaxing = false;
                                this.arr = o.data;
                                this.currentPage = o.page;
                                this.totalPage = o.totalPage;
                                this.totalBlocks = o.totalCount;

                                if (this.arr.length) {
                                    this.heightFrom = this.arr[0].height;
                                    this.heightTo = this.arr[this.arr.length - 1].height;
                                } else {
                                    this.heightFrom = 0;
                                    this.heightTo = 0;
                                }
                            }, xhr => {
                                console.log(xhr);
                                // this.ajaxing = false; // 由于跳转了所以不需要修改 ajaxing
                                this.$router.replace("/404");
                            });
                        }
                    else
                        console.log("nthTxPage - 请求的第", p, "页不在 [ 1,", this.totalPage, "] 内, 忽略此次调用");
                else
                    console.log("nthTxPage - 无效的 p", p, ", 忽略此次调用");
            },
            onFirst() {
                this.nthTxPage(1);
            },
            onLast() {
                this.nthTxPage(this.totalPage);
            },
            onNext() {
                this.nthTxPage(this.currentPage + 1);
            },
            onPrev() {
                this.nthTxPage(this.currentPage - 1);
            }
        },
        mounted() {
            console.log("根据 url 参数决定怎么做", this.$route.query);
            this.nthTxPage(1);
            this.totalPage = 0;
        }
    };
</script>