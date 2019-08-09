var globalNav = new Vue({
  el:"header",
  data:{
    global:[
      {
        text1:"トップ ",
        text2:"Top",
        link:""
      },
      {
        text1:"会社概要",
        text2:"Company",
        link:"company.php"
      },
      {
        text1:"事業紹介",
        text2:"Service",
        link:"service.php"
      },
      {
        text1:"商品情報",
        text2:"Products",
        link:"products.php"
      },
      {
        text1:"リクルート",
        text2:"Recruit",
        link:"recruit.php"
      }
    ]
  }
});

var spNav = new Vue({
  el:".sp-nav-wrap",
  data:{
    spnav:[
      {
        text1:"トップ ",
        text2:"Top",
        link:""
      },
      {
        text1:"会社概要",
        text2:"Company",
        link:"company.php"
      },
      {
        text1:"事業紹介",
        text2:"Service",
        link:"service.php"
      },
      {
        text1:"商品情報",
        text2:"Products",
        link:"products.php"
      },
      {
        text1:"リクルート",
        text2:"Recruit",
        link:"recruit.php"
      },
      {
        text1:"お問い合わせ",
        text2:"Contact",
        link:"contact.php"
      }
    ]
  }
});

var groups = new Vue({
  el:".group",
  data:{
    group:[
      {
        title:"本社　加工センター",
        text:"〒485-0055<br>愛知県小牧市多気北町168番地<br>TEL 0568-74-0415 <br>FAX 0568-74-0417"
      },
      {
        title:"一宮加工センター",
        text:"〒456-0072<br>愛知県一宮市伝法寺2丁目5-5<br>TEL 0586-77-0666<br>FAX 0586-77-1170"
      },
      {
        title:"沖村冷蔵加工センター",
        text:"〒481-0043<br>愛知県北名古屋市沖村権現1番地<br>TEL 0568-21-0877<br>FAX 0568-21-0986"
      },
      {
        title:"オーガニックセンター",
        text:"〒455-0855<br>名古屋市港区藤前1-772<br>TEL 052-304-4831<br>FAX 052-304-4832"
      },
      {
        title:"フルーツファクトリー",
        text:"〒480-0202<br>愛知県西春日井郡豊山町豊場八反107<br>北部市場関連事業者棟1F<br>TEL 052-683-0310<br>FAX 052-683-0358"
      }
    ]
  }
});

var unders = new Vue({
  el:".under",
  data:{
    under:[
      {
        title:"トップ",
        link:""
      },
      {
        title:"会社概要",
        link:"company.php"
      },
      {
        title:"事業紹介",
        link:"service.php"
      },
      {
        title:"商品情報",
        link:"products.php"
      },
      {
        title:"リクルート",
        link:"recruit.php"
      },
      {
        title:"お問い合わせ",
        link:"contact.php"
      }
    ]
  }
});
