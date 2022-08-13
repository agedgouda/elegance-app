<script setup>
import Property from "./components/Property.vue";
</script>

<template>

  <div id="nav">
    <img
      alt="Vue logo"
      class="logo"
      src="/images/elegance-rent-logo.300a5f44.png"
    />
  </div>

  <div class="container">
  <h2>Properties</h2>  
  <ais-instant-search :search-client="searchClient" index-name="elegance">
    <ais-sort-by
      :items="[
        { value: 'elegance', label: 'Rating High to Low' },
        { value: 'elegance_rating_asc', label: 'Rating Low to High' },
      ]"
    />
      <ais-menu-select attribute="tier" label="Tier" searchable-placeholder="Tier">
    <template v-slot:defaultOption>
      Tier
    </template>
    </ais-menu-select> 
    
    <ais-menu-select attribute="pets" label="Pets" searchable-placeholder="Pets Allowed">
    <template v-slot:defaultOption>
      Allow Pets
    </template>
    </ais-menu-select>
    <ais-search-box/>

    
    <ais-hits>
      <template v-slot:item="{ item }">
      <Property v-bind="{ item }"></Property> 
      </template>
    </ais-hits>
    <ais-pagination />

  </ais-instant-search>

  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { AisHits,AisInstantSearch, AisSearchBox, AisSortBy, AisMenuSelect,AisPagination } from 'vue-instantsearch/vue3/es';

export default {
  data() {
    return {
      searchClient: algoliasearch(
        'H1FG8GNSR6',
        '54c925cbd4c924a0f978fec55a44ee27'
      ),
    };
  }
};
</script>

<style>
.ais-SortBy {
    float: right;
}
.ais-MenuSelect  {
  display: inline;
  padding: 0rem 1rem 1rem 0rem;
  width: calc(25% - 1rem);
}

.ais-Pagination-list  {
  margin: 2rem auto;
  text-align: center;
}


a {
  font-weight: bold;
}
</style>