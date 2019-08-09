<main class="group">
  <h2><span>GROUP</span>事業所・工場一覧</h2>
  <section class="list">
    <article class="single" v-for="(groups,index) in group">
      <p class="img"><img :src="'./images/index/group' + (index + 1) + '.png'" alt=""></p>
      <p class="title">{{groups.title}}</p>
      <p class="text" v-html="groups.text"></p>
    </article>
    <article class="dummy single"></article>
  </section>
</main>
