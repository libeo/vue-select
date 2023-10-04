<template>
  <div id="app">
    <v-select
      v-model="selectedCountry"
      v-bind="countriesList"
      placeholder="Sélectionnez un pays"
    />

    <label for="books-select">
      Books
    </label>
    <p id="books-description1">
      Select all the books that you want to read.
    </p>
    <p id="books-description2">
      I mean, really, don't hold back.
    </p>
    <v-select
      inputId="books-select"
      v-model="selectedBook"
      v-bind="booksList"
      :multiple="true"
      placeholder="Sélectionnez des livres"
      :ariaDescribedByUids="['books-description1', 'books-description2']"
    />

  </div>
</template>

<script>
import vSelect from '../src/components/Select'
import countries from '../docs/.vuepress/data/countryCodes'
import books from '../docs/.vuepress/data/books'

export default {
  components: { vSelect },
  data: () => ({
    selectedCountry: null,
    countriesList: {
      options: countries,
    },
    selectedBook: null,
    booksList: {
      options: books,
    },
  }),
}
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  font-family: -apple-system, sans-serif;
}

#app {
  height: 100%;
  max-width: 20rem;
  margin: 10rem auto 0;
}

hr {
  border: none;
  border-bottom: 1px solid #cacaca;
  margin-bottom: 1em;
  padding-top: 1em;
  width: 90%;
}
</style>
