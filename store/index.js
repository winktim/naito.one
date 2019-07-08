export const state = () => ({
  email: 'hello@naito.one',
  sidebarOpened: false,
})

export const mutations = {
  setSidebarOpened(state, { sidebarOpened }) {
    state.sidebarOpened = sidebarOpened
  },
}
