const express = require('express')

const app = express()


app.get('/', (req, res) => {

    teste()
    return res.send('hello world Mimicou')




})


app.listen(3333)


function teste(){
    var Peer = require('simple-peer')
    var wrtc = require('wrtc')

    var peer = new Peer(null, {
        initiator: true,
        trickle: false,
        wrtc: wrtc
    })
    
    
    // peer.on('signal', function (data) {
    //     return JSON.stringify(data)
    // })

}