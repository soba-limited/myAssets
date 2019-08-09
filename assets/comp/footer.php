<main class="contact">
  <div class="wrap1040">
    <section class="white">
      <h2><span>CONTACT</span>お問い合わせ</h2>
      <p class="text">セントラルフーズへは下記よりお気軽にお問い合わせください</p>
      <article class="flex">
        <div class="left">
          <p class="tell"><span>TEL</span>0568-21-4122</p>
          <p class="sub">営業時間　平日9：00〜17：00</p>
        </div>
        <div class="contact-button">
          <p class="link"><a href="./contact.php"><span>お問い合わせ</span></a></p>
        </div>
      </article>
    </section>
  </div>
</main>
<nav class="under pc2">
  <div class="wrap1040">
    <ul>
      <li v-for="(unders,index) in under"><a :href="'./' + unders.link">{{unders.title}}</a></li>
    </ul>
    <p class="pagetop"><a href="#pagetop"><i class="fas fa-chevron-up"></i></a></p>
  </div>
</nav>
<footer>
  <div class="wrap1040">
    <h2><img src="./images/common/f-logo.png" alt=""></h2>
    <p class="text">〒485-0055 愛知県小牧市多気北町168番地 <br class="sp">TEL 0568-74-0415</p>
    <p class="copy">COPYRIGHT 2019 株式会社セントラルフーズ ALL RIGHTS RESERVED<br>PRODUCED BY YOHAKU-BUNKA</p>
  </div>
</footer>
