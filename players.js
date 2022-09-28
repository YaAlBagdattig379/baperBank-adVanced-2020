// console.log("hello ! how are you ")1
function adPlayer() {
    const playerContainer = document.getElementById("playerHead");
    const player = document.createElement("div");
    player.classList.add('player');
    player.innerHTML = `
    <div class="player"style="margin-bottom:30px;">
    <h2 style="color: red;">Player</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, est. Quam officiis itaque accusantium sit? Animi omnis ducimus corporis! Doloribus repudiandae minima perferendis tempora possimus nemo, error perspiciatis quibusdam pariatur?</p>
    </div>
    `
    playerContainer.appendChild(player);
    // console.log(player)
}
const playerss = document.getElementsByClassName('player');
for(const player of playerss){
    setplayerStyle(player);
    player.addEventListener('click',function(){
        player.setplayerStyle
    })
}