import fetch from "node-fetch"
import { readFileSync } from "fs"

export async function all(m) {
if (m.isBaileys) return
    let MengSkak = /^(skak|halah|cih|cuih|yaha|erorr|kasian|dek|gajelas|bokep)$/i.test(m.text)
        if (MengSkak && m.isGroup) {
            //Teks Skak
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/skak?apikey=MIMINGANZ`)
let x = await f.json()
return m.reply(x.result ? x.result : ':v')
        }
 }
