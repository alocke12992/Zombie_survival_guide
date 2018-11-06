<template>
  <div class='section'>
    <h1>Guide</h1>
    <div :class="['post-view', selected ? 'post-view--active' : '' , ready ? 'post-view--ready' : '' ]">
      <div class="post-view__container" v-if="selected">
        <div class="post-controls">
          <div class="post-control post-control--close" @click="closePost()"><v-icon name="x"></v-icon></div>
          <div class="post-control" id="next-post" @click="nextPost()"><v-icon name="chevron-right"></v-icon></div>
          <div class="post-control" id="prev-post" @click="prevPost()"><v-icon name="chevron-left"></v-icon></div>
        </div>
        <h2 class="post-view__title">{{currentPost.title}}</h2>
        <div class="post-view__content" v-html="currentPost.content"></div>
      </div>
    </div>
    <div :class="['post-list', selected ? 'post-list--hide' : '']">
      <div class="post" v-for="(item, index) in posts" v-on:mouseenter="changePost(index)" @click="selectedPost(index)" v-bind:key="item.id">
        <h2 class="post__title">{{item.page}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Tip from '../components/Tip.vue'
import data from '../assets/data.js'

export default {
  name: 'Guide',
  components: {
    Tip,
  },
  data: function() {
    return {
      posts: data.pages,
      routes: [],
      currentRouteId: 0,
      currentPost: data.pages[0],
      postIndex: 0,
      selected: true,
      ready: true,
      lastSelectedPost: 0,
      clipPath: data.pages[0].clip_path
    }
  },
  methods: {
  changePost(index) {
      if (this.postImage != this.posts[index].image && this.selected == false) {
        this.postImage = this.posts[index].image;
        this.clipPath = this.posts[index].clip_path;
      }
    },
    closePost() {
      if(this.lastSelectedPost != null){
        this.selected = false;
        this.ready = false;
        this.clipPath = this.posts[this.lastSelectedPost].clip_path;
      }
    },
    selectedPost(index) {
      this.selected = true;
      this.clipPath = this.selectedClipPath;
      this.lastSelectedPost = index;
      this.currentPost = this.posts[index];
      setTimeout(() => {
        this.ready = true;
      }, 600);
    },
    nextPost() {
      if (this.lastSelectedPost < this.posts.length - 1) {
        this.lastSelectedPost++;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    },
    prevPost() {
      if (
        this.lastSelectedPost <= this.posts.length - 1 &&
        this.lastSelectedPost != 0
      ) {
        this.lastSelectedPost--;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    }
  },
  created() {
    window.addEventListener("keydown", e => {
      e.keyCode == 39 ? this.nextPost() : false;
      e.keyCode == 37 ? this.prevPost() : false;
      e.keyCode == 27 ? this.closePost() : false;
    });
  }
}
</script>

<style scoped>

  h1 {
    text-align: center;
  }

  .post {
    cursor: pointer;
    text-align: center; 
  }

  .post__title {
    font-family: "Nunito", sans-serif;
    font-size: 2em;
    padding: 12px 30px;
    font-weight: bold;
    position: relative;
  }
  .post__title:after {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    transition: width .3s ease 0s;
    content: "";
    background: black;
    transform: skew(-20deg);
  }
  .post__title:hover:after {
    width: 100%; 
  }
  .post__title:hover{
    color: #d83c3c;
  }
  .post:last-child {
    margin-bottom: 0;
  }

  .post-list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    transition: all .3s ease 0s;
    transform: translateY(0px);
    visibility: visible;
  }
  .post-list--hide {
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
  }

  .post-view {
    transition: .3s ease 0s;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .post-view__container {
    width: 100%;
    max-width: 900px;
    z-index: 99;
    opacity: 0;
    transition: all .3s ease 0s;
  }
  .post-view__content {
    background: #fff;
    padding: 40px;
    margin-bottom: 80px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(85px);
    transition: transform .3s ease 0s;
  }
  .post-view__content p {
    font-size: 1.125em;
    margin-bottom: 30px;
    line-height: 25px;
  }
  .post-view__content p:last-child {
    margin-bottom: 0;
  }
  .post-view--active .post-view__image {
    background-position: top;
    transition: all .6s ease 0s;
    width: 100%;
    height: 520px;
    margin-top: 0;
    top: 0;
  }
  .post-view__title {
    font-size: 2.875em;
    font-weight: bold;
    font-family: "Nunito", sans-serif;
    margin: 30px 0 15px 0;
    transform: translateY(45px) scaleY(0);
    transition: transform .3s ease-out 0s;
  }
  .post-view--ready .post-view__container {
    opacity: 1;
  }
  .post-view--ready .post-view__date, .post-view--ready .post-view__content {
    transform: translateY(0px);
  }
  .post-view--ready .post-view__title {
    transform: translateY(0px) scaleY(1);
  }

  .post-controls {
    position: fixed;
    right: 20px;
    flex-direction: column;
    top: 35%;
    display: flex;
  }

  .post-control {
    cursor: pointer;
    font-size: 1.375em;
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 43px;
    transition: all .3s ease 0s;
    color: white
  }
  .post-control:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  .post-control--close {
    font-size: 2em;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  .post-control--close:hover {
    background: #d83c3c;
  }

  #next-post:hover {
    background: black;
  }
  #prev-post:hover {
    background: black;
  }

  @media only screen and (max-width: 991px) {
    html {
      font-size: 13px;
    }

    .post-controls {
      bottom: 10px;
      z-index: 99;
      top: auto;
      padding: 0 5px;
      justify-content: center;
      margin: auto;
      border-radius: 30px;
      height: 55px;
      align-items: center;
      flex-direction: row-reverse;
    }

    .post-control {
      margin: 0 5px;
    }
    .post-control--close {
      background: #000;
    }

    .post-view__container {
      padding: 0 30px;
    }
  }

</style>
