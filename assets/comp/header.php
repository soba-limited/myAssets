<div id="header">
  <section class="sp-nav-wrap tab">
    <article class="toggle-wrap">
      <button class="spnav-toggle">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
      <p class="type"></p>
    </article>
    <nav class="sp-nav">
      <ul>
        <li v-for="spnavs in spnav">
          <a :href="'./' + spnavs.link">
            <p class="main">{{spnavs.text1}}</p>
            <p class="sub">{{spnavs.text2}}</p>
          </a>
        </li>
      </ul>
    </nav>
  </section>
  <header>
    <main class="flex-content">
      <section class="logo">
        <h1>野菜をその旬に、生きたまま、おいしいままお届けする</h1>
        <p class="logo-img"><img src="./images/common/logo.png" alt=""></p>
      </section>
      <section class="h-info pc">
        <article class="info-flex">
          <div class="tell-wrap">
            <p class="tell"><span>TEL</span>0568-21-4122</p>
            <p class="sub">営業時間　平日９：00〜17：00</p>
          </div>
          <div class="contact-button">
            <a href="./contact.php" class="pc2"><span>お問い合わせ</span></a>
            <a href="./contact.php" class="tab"><span><i class="far fa-envelope"></i></span></a>
          </div>
        </article>
        <nav class="global pc2">
          <ul>
            <li v-for="globals in global">
              <a :href="'./' + globals.link">
                <p class="main">{{globals.text1}}</p>
                <p class="sub">{{globals.text2}}</p>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  </header>
</div>
