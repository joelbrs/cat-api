<template>
    <v-container>
        <v-row>
            <v-col
            v-for="(cat ) in cats"
            :key="cat.id"
            cols="4">
                <v-card max-height="650">
                    <!--<div class="buttons">
                        <v-btn color="rgba(255, 0, 0)">Love it</v-btn>
                        <v-btn color="rgba(0, 255, 0)">Nope it</v-btn>
                    </div>-->
      
                    <v-img class="img" :src="cat.image ? cat.image.url : ''" max-height="250" max-width="380px"></v-img>
              
                    <div class="infos">
                        <h4>{{cat.name}}</h4>
                        <p class="description">{{cat.description}}</p>
                        <p class="temperament">{{cat.temperament}}</p>
                        <p>---</p>
                        <p class="metric">{{cat.weight.metric}} kg</p>
                        <p class="imperial">{{cat.weight.imperial}} average life span</p>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <PaginationCats :catsPerPage="catsPerPage" :catsTotal="catsTotal" />
    </v-container>
</template>

<script>
import { api } from '@/services.js'
import PaginationCats from './PaginationCats.vue'

export default {

    name: 'ListCats',

    components: {
      PaginationCats
    },
 
    data() {
        return {
            cats: [],
            catsTotal: 0,
            catsPerPage: 3
        }
    },

    computed: {
      url() {
        let queryString = ''

        for (let key in this.$route.query) {
          queryString += `&${key}=${this.$route.query[key]}`
        }
        
        return `breeds?limit=3` + queryString
      }
    },

    methods: {
      getCats() {
          api.get(this.url).then(r => {
            this.cats = r.data

            this.catsTotal = Number(r.headers['pagination-count'])
        })
      },
    },

    watch: {
      url() {
        this.getCats()
      }
    },

    created() {
      this.getCats()
    }
}
</script>

<style scoped>

.cards {
  margin: 0 auto;
}

.buttons {
  max-width: 380px;
  padding: 15px 0;

}

.img {
  margin: 10px 0
}

.infos, .buttons {
  text-align: center;
}

.fav {
  margin-top: 15px;
}

</style>