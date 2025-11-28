// let blob = await fetch(`https://randomuser.me/api/`);
// let res = await blob.json();
// console.log(res);

// jo bhi code async nature ka ho , usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab saara sync code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo cmplete hua ho to usey main stack mein laao and chala do.

// setTimeout function: it is also async in nature
// setTimeout(() => {
//   console.log("Hello");
// }, 4000);



async function abcd() {
    let blob = await fetch(`https://randomuser.me/api/`);
    let ans = await blob.json();
    console.log(ans.results[0].email);
}

abcd();
