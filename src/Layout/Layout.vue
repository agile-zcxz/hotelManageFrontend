<template>
    <div>
        <Header></Header>
        <main style="display: flex">
            <Aside></Aside>
            <router-view style="flex: 1;"/>
        </main>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Aside from "../components/Aside";
    export default {
        name: "Layout",
        components: {Aside, Header}
    }
</script>

<style scoped>

</style>