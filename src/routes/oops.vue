<style>
    .vue-oops .container .oops {
        text-align: center;
    }

    .vue-oops .image {
        width: 60%;
        height: 400px;
        margin: auto;
        background: url(../img/oops.jpg) center no-repeat;
    }
</style>
<template>
    <div class="container vue-oops">
        <div class=oops>
            <h1>Oops!</h1>
            <h3>The search string you entered was:</h3>
            <pre></pre>
            <h4>Sorry! This is an invalid search string.</h4>
        </div>
        <div class=image>
            <div></div>
        </div>
    </div>
</template>