<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/test">test</router-link>
    <test-component/>
    <svg width="30" height="30">
      <use href="#more"></use>
    </svg>
    <svg width="30" height="30">
      <use href="#play"></use>
    </svg>
    <svg width="30" height="30">
      <use href="#right"></use>
    </svg>
    <Icon prefix="" name="right" :style="{width: '30px', height: '30px', color: 'red'}"></Icon>
    <Icon prefix="" name="box" :style="{width: '30px', height: '30px', color: 'red'}"></Icon>
    <Icon name="qq" :style="{width: '30px', height: '30px', color: 'blue'}"></Icon>
    <test-component-2/>
    <test-component-three/>
  </div>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
