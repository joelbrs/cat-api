<template>
    <v-container>
        <v-row>
            <v-col
            v-for="(cat ) in cats"
            :key="cat.id"
            cols="4">

              {{cats[0].name}}
                <v-card height="650">
                    <div class="buttons">
                        <v-btn color="rgba(255, 0, 0)">Love it</v-btn>
                        <v-btn color="rgba(0, 255, 0)">Nope it</v-btn>
                    </div>
      
                    <v-img class="img" :src="cat.image ? cat.image.url : ''" max-height="250" max-width="380px"></v-img>
              
                    <div class="infos">
                        <h4>{{cat.name}}</h4>
                        <p class="description">{{cat.description}}</p>
                        <p class="temperament">{{cat.temperament}}</p>
                        <p>---</p>
                        <p class="metric">{{cat.weight.metric}} kg</p>
                        <p class="imperial">{{cat.weight.imperial}} average life span</p>
                    </div>
              
                    <v-btn class="fav-btn" width="370px" color="4ef" @click="fav = true">Fav</v-btn>
                    <p class="fav-text" v-show="fav">Favoritado!</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { api } from '@/services.js'

export default {

    name: 'ListCats',
 
    data() {
        return {
            cats: [],
            fav: false
        }
    },

    methods: {
      getCats() {
         return api
              .get()
              .then(r => {
                this.cats = r.data

                return r.data
              })
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