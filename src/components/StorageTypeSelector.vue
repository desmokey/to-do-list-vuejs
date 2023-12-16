<template>
  <div class="store-type-selector">
    <form>
      <div
        :class="{
          '--checked': storageType == 'nostorage'
        }"
      >
        <input
          type="radio"
          id="nostorage"
          name="storagetype"
          value="nostorage"
          :checked="storageType == 'nostorage'"
          @change="$store.dispatch('changeStorageType', 'nostorage')"
        />
        <label for="nostorage"> No storage</label>
      </div>
      <div
        :class="{
          '--checked': storageType == 'sessionstorage'
        }"
      >
      <input
        type="radio"
        id="sessionstorage"
        name="storagetype"
        value="sessionstorage"
        :checked="storageType == 'sessionstorage'"
        @change="$store.dispatch('changeStorageType', 'sessionstorage')"
      />
      <label for="sessionstorage"> Session storage </label><br>
    </div>
    <div
      :class="{
        '--checked': storageType == 'localstorage'
      }"
    >
      <input
        type="radio"
        id="localstorage"
        name="storagetype"
        value="localstorage"
        :checked="storageType == 'localstorage'"
        @change="$store.dispatch('changeStorageType', 'localstorage')"
      />
      <label for="localstorage"> Local storage</label><br>
    </div>
    </form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'StorageTypeSelector',
    beforeMount() {
      this.$store.dispatch('initializeStorageType')
    },
    computed: mapState({
      storageType: 'storageType'
    })
  }
</script>

<style lang="scss">
  .store-type-selector {
    margin-bottom: 2rem;
    text-align: left;

    label {
      cursor: pointer;
      &.--checked {
        color: red;
      }
    }

    & .--checked label {
      color: green;
    }
  }
</style>
