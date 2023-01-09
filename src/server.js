import { Hono } from 'hono'
import axios from 'axios'

const app = new Hono()

app.get('/hola', (c) => c.text('Hello! Hono!'))

app.get('/brawlers', async (c) => {
  const res = await fetch(
    `https://api.brawlstars.com/v1/players/%23JGCCGY80?authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU3ZDRhZTYyLTMwOGMtNDAxYS04MTA0LWViMGVlZjE4MzE2ZSIsImlhdCI6MTY3MzMwNDk4NCwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTk4LjQxLjIzMC4xODUiXSwidHlwZSI6ImNsaWVudCJ9XX0.r7UJjTXYhtQ7aGxJ3jPgDos-YL-KPAx4Awpn5BVuetYl4vpvjQvXoEtvuyMnvQTc_J_ldUtDrEmYD5RmzlZw7A`
  )
  const data = await res.json()
  return c.json(data)
})

export default app
// fetch(`https://api.brawlstars.com/v1/players/%23JGCCGY80`, {
//     headers: {
//       Authorization:
//         'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImU2ZDQ1MzIxLTBiNGItNDJhZC1hMjIxLTU5YzEwMWJiYmIyYSIsImlhdCI6MTY3MzI2ODUxNCwic3ViIjoiZGV2ZWxvcGVyLzNhZDRhZDlkLWIwNmEtZjBkYi00YWQyLTJhYzM2MDRlYjU5YiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTkwLjAuMTc5LjE0MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.Q28ySgUVP1ineQ30KUUV_TiN8LS13Nx2FsGdO991jQ3qw2qxuR5RH-w5i1xOk2M1HUZl4WfnfdI7UgM1Q6jrxA',
//     },
//   })
