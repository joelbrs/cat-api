<template>
    <v-container>
        <v-row>
            <v-col
            v-for="cat in cats"
            :key="cat.id"
            cols="4">
                <v-card height="500">

                    <div class="buttons">
                        <v-btn color="rgba(255, 0, 0)">Love it</v-btn>
                        <v-btn color="rgba(0, 255, 0)">Nope it</v-btn>
                    </div>
      
                    <v-img src="" max-height="200" max-width="380px"></v-img>
              
                    <div class="infos">
                        <h4>{{cat.name}}</h4>
                        <p>{{cat.description}}</p>
                        <p>{{cat.temperament}}</p>
                        <p>---</p>
                        <p>{{cat.weight.metric}} kg</p>
                        <p>{{cat.weight.imperial}} average life span</p>
                    </div>
              
                    <v-btn class="fav" width="370px" color="4ef">Fav</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    name: 'ListCats',
 
    data() {
        return {
            cats: null,
        }
  },

  async fetch() {
    this.cats = await this.$axios.$get(`breeds`)
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

.infos, .buttons {
  text-align: center;
}

.fav {
  margin-top: 15px;
}

</style>