import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APP_ID,
    key: `${process.env.PUSHER_APP_KEY}`,
    secret: `${process.env.PUSHER_APP_SECRET}`,
    cluster: `eu`,
    useTLS: true,
})

export const pusherClient = new PusherClient(
    "f63ea3d75d76c809ee46",
    {
        cluster: `eu`,
    }
)