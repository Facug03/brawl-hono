import { Hono } from 'hono'

const app = new Hono()

app.get('/hola', (c) => c.text('Hello! Hono!'))

app.get('/brawlers', async (c) => {
  const res = await fetch(
    `https://api.brawlstars.com/v1/players/%23JGCCGY80?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY3ZjM3ZDQ5LTM2NjAtNDhkZC1hNDZiLTMzNzU5ZTU1ODBkMSIsImlhdCI6MTY3MzMwNjk5Miwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTcyLjY2LjQ1LjE1IiwiMTcyLjY2LjQ2LjI0MSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.M0VYthICs7zMKw-8aaTnY0gJB8S91dvM0PIjBiaT8s6ehfPTKw7o9xbKNP0jBiQLnhU8fKK0qclIViQtveLZ3g`
  )
  const data = await res.json()
  return c.json(data)
})

export default app
