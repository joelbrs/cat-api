<template>  
    <ul>
        <li v-for="page in pagesTotal" :key="page">
            <nuxt-link :to="{query: {page: page}}">{{page}}</nuxt-link>
        </li>
    </ul>
</template> 

<script>
export default {
    name: 'PaginationCats',

    props: {
        catsTotal: {
            type: Number,
            default: 1
        },

        catsPerPage: {
            type: Number,
            default: 1
        }
    },

    computed: {
        pagesTotal() {
            const total = this.catsTotal / this.catsPerPage

            return Math.ceil(total)
        }
    }
}
</script>

<style scoped>

ul {
    text-align: center;
}

li {
    display: inline-block;

    margin-top: 40px;
}

li a {
    padding: 2px 8px;
    margin: 4px;

    border-radius: 2px;

    text-decoration: none;
    background-color: aliceblue;
}
</style>