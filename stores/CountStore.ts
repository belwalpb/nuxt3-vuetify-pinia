export const useCountStore = defineStore('CountStore', {
  state: () => {
    return {
      count: 0,
      users: []
    };
  },
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot));
}
