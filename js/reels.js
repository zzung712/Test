for(let i=1; i<6; i++){
 let ReelsWrap = document.querySelector(".reels_wrap");
 let Reels = document.createElement("div")
 Reels.className="reels"
 Reels.innerHTML = `
 <div class="reels_img">
 <ul>
  <li>
   <img src="img/explore_img5.jpg" alt="x">
  </li>
 </ul>
 <div class="reels_txt">
  <ul class="reels_id">
   <li><img src="img/zzangah.PNG" alt="x"></li>
   <li>Instar_id${i}</li>
   <li><p>팔로우</p></li>
  </ul>
  <ul class="reels_contents"></ul>
  <ul class="reels_audio"></ul>
 </div>
</div>
<div class="reels_comment">
 <ul>
  <li>
  <img class="like" src="img/like.png" alt="x">
  <img class="hate" src="img/hate.png" alt="x"> 
  <p class="like_cnt">0</p>
  </li>
  <li><img src="img/comment.png" alt="x"><p>0</p></li>
  <li><img src="img/dm.png" alt="x"></li>
  <li>
  <img class="scrap" src="img/scrap.png" alt="x">
  <img class="save" src="img/save.png" alt="x">
  </li>
  <li><p class="add_txt">···</p></li>
  <li><img src="img/zzangah.PNG" alt="x"></li>
 </ul>
</div>
 `;
 ReelsWrap.appendChild(Reels);
}