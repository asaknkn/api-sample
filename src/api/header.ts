import * as crypto from 'crypto'

export const getAuthorization = (path:string, method:string, requestBody = ""):string =>{
  const apiKey = process.env.VUE_APP_API_KEY
  let apiSecret = process.env.VUE_APP_API_SECRET
  const timestamp = getTimeStamp()
  const nonce = getNonce()
  let contentTpye
  let hash

  if (apiSecret === undefined) {
    apiSecret = '1234'
  }

  if (requestBody === "") {
    contentTpye = "empty"
    hash = "empty"
  } else {
    contentTpye = "application/json"
    const md = crypto.createHash('md5')
    md.update(contentTpye)
    md.update(requestBody)
    hash = md.digest().toString('base64')
  }

  const hmacData = [path, method, nonce, timestamp, contentTpye, hash].join('\n')

  const sha256HMAC = crypto.createHmac('sha256', apiSecret)
  sha256HMAC.update(hmacData)
  const macData = sha256HMAC.digest().toString('base64')

  const authorization = ["hmac OPA-Auth", apiKey, macData, nonce, timestamp, hash].join(":")
  return authorization
}

const getNonce = ():string => {
  return ((1+Math.random()) * 0x1000000|0).toString(16).substring(1).toLowerCase()
}

const getTimeStamp = ():number => {
  const date = new Date()
  const nowUtc = Date.UTC(date.getUTCFullYear(),
                    date.getUTCMonth(),
                    date.getUTCDate(),
                    date.getUTCHours(),
                    date.getUTCMinutes(),
                    date.getUTCSeconds()
                    )
  return Math.round(nowUtc / 1000)
}