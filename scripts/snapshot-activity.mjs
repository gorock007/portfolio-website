// Refreshes data/activity.json — the committed copy of the contribution
// counts the home page falls back on when the live mirror can't be reached.
//   npm run snapshot:activity
import { writeFile } from 'node:fs/promises'

const response = await fetch('https://github-contributions-api.jogruber.de/v4/gorock007?y=last', {
  headers: { Accept: 'application/json' },
})
if (!response.ok) throw new Error(`Mirror answered ${response.status}`)
const { contributions } = await response.json()
const counts = Object.fromEntries(
  contributions.filter((day) => day.count > 0).map((day) => [day.date, day.count]),
)
await writeFile(
  new URL('../data/activity.json', import.meta.url),
  JSON.stringify({ takenAt: new Date().toISOString().slice(0, 10), counts }, null, 2) + '\n',
)
console.log(`Saved ${Object.keys(counts).length} active days.`)
