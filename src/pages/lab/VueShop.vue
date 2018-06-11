<template>
	<div class="vue-shop">
    <div class="image">
      <img src="../../../static/shop-snap.jpg">
    </div>
		<div class="introduce">
			<div class="left-part">
				<h3>Year</h3>
				<h4>{{information.year}}</h4>
			</div>
			<div class="middle-part">
				<h3>Technologies</h3>
				<h4 v-for="item in information.technology">
          {{item}}
				</h4>
			</div>
			<div class="right-part">
				<h1>{{information.title}}</h1>
				<h2>{{information.detail}}</h2>
        <a target="_blank" href="http://116.62.217.57:8080">demo</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  information: {
    year: '06/2018',
    technology: [
      'Vue.js',
      'ES6',
      'Vuex',
      'Axios',
      'Scss'
    ],
    title: 'Web Shop Developed By Vue',
    detail: 'This website is a remote-work of mine.By now, it supports product show, condition filter, product admin, cart, sign and so on. It based on Vue.js and uses Vuex to manage state.'
  },
  computed: {
    information: function () {
      return this.$options.information
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  .image {
    width: 60%;

    img {
      width: 100%;
    }
  }

  .introduce {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100%;
    justify-content: center;
    border-top: 1px solid;

    .left-part {
      display: flex;
      flex-direction: column;
      flex: .2;

    }

    .middle-part {
      display: flex;
      flex-direction: column;
      flex: .2;

    }

    .right-part {
      display: flex;
      flex-direction: column;
      flex: .6;

      a {
        font-size: 3rem;
        color: rgb(213, 123, 23);
        align-self: flex-start;
      }
    }
  }
}
	
</style>