let channels = [
    {
        name: "lofi hip hop radio - beats to relax/study to", 
        url: "https://www.youtube.com/embed/hHW1oY26kxQ", 
        type: "live"
    }, 
    {
        name: "lofi hip hop radio - beats to sleep/chill to",
        url: "https://www.youtube.com/embed/EcEMX-63PKY", 
        type: "live"
    }, 
    {
        name: "24/7 lofi hip hop radio - beats to relax/study to",
        url: "https://www.youtube.com/embed/pH3xU1YcjaA",
        type: "live"
    }, 
    {
        name: "lofi hip hop radio - beats to study/relax to"
        url: "https://www.youtube.com/embed/bebuiaSKtU4",
        type: "live"
    }, 
]
let r;
(() => {
    r = rplc8("#frame");
    channel_picker = rplc8("#channel", channels, (e, d, i) => {
        e.addEventListener("click", evt => {
            r.update(d);
        });
    });
    r.update(channels[0]);
})();
