interface keypadphonedata{  //roughdata
    keypadphonebrand:string,
  keypadphoneprize:number,
  keypadphonecolor:string
}
interface smartphonedata{  //rough data
    smartphonebrand:string,
  smartphoneprize:number,
  smartphonecolor:string
}

let keypadphone:keypadphonedata =
{
  kbrand:'nokia',
  kprize:1000,
  kcolor:"blue"
}
let smartphone:smartphonedata=
{
    sbrand:"vivo",
  sprize:12000,
  scolor:"white"
}
let keypadphonesmartphone = {...keypadphone, ...smartphone}
console.log(keypadphonesmartphone)