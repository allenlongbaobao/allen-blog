<template>
  <div class="wraper">
    <p><b>A</b>llen's blog</p>
    <ul id="navigater">
      <li class="singleNavigate" v-for="item in items">
        <router-link :to="item.link">{{ item.content }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            link: '/',
            content: 'Main'
          },
          {
            link: '/article',
            content: 'Article'
          },
          {
            link: '/lab',
            content: 'Lab'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

#navigater {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 5em;
}

#navigater > li {
  padding-left: 20px;
}

#navigater > li > a {
  color: black;
  text-decoration: none;
  text-align: center;
}

.wraper p {
  font-size: 10em;
}

#navigater > li:hover {
  background-color: green;

}

</style>
