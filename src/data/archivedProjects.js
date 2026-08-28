// Projects that are not on the site right now. Nothing imports this file, so
// none of these images are bundled; move an entry back into `projects.js`
// (with its image import) to put it back on the grid.
import summaize from '../images/summaize.png'
import imagegenerator from '../images/imagegenerator.png'
import crypto from '../images/crypto.png'
import podcast from '../images/podcast.jpeg'
import scorekeeper from '../images/scorekeeper.png'
import dbs from '../images/dbs.png'

export const archivedProjects = [
  {
    id: 'make-product-viral',
    title: 'make-product-viral',
    subtitle: 'A Claude Code skill that audits a landing page for virality.',
    detail: 'Scores any product page against the 32 Principles of a Viral Product and returns prioritised fixes.',
    proof: ['Open source', 'Claude Code skill'],
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/make-product-viral',
    size: 'wide',
  },
  {
    id: 'summaize',
    title: 'summAIze',
    subtitle: 'Article and URL summaries in a click.',
    img: summaize,
    imgAlt: 'summAIze web app condensing an article URL into a short summary',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/summAIze',
    size: 'sm',
  },
  {
    id: 'image-generator',
    title: 'AI Image Generator',
    subtitle: 'Text-to-image, built to learn the pipeline.',
    img: imagegenerator,
    imgAlt: 'AI image generator interface with a text prompt and generated result',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/ai-image-generator',
    size: 'sm',
  },
  {
    id: 'podcast-summarizer',
    title: 'Podcast Summarizer',
    subtitle: 'Transcribe an episode, keep the argument.',
    img: podcast,
    imgAlt: 'Podcast summarizer output showing a transcript condensed into key points',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/podcast-summarizer',
    size: 'sm',
  },
  {
    id: 'crypto-app',
    title: 'Crypto App',
    subtitle: 'Live market data, charted.',
    img: crypto,
    imgAlt: 'Cryptocurrency tracking app showing price charts and market data',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/crypto-app',
    size: 'sm',
  },
  {
    id: 'dbs-consulting',
    title: 'DBS Consulting',
    subtitle: 'A consulting site, built for a client.',
    img: dbs,
    imgAlt: 'DBS Consulting marketing website homepage',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/dbs-consulting',
    size: 'sm',
  },
  {
    id: 'scorekeeper',
    title: 'Ping Pong ScoreKeeper',
    subtitle: 'The first thing I ever shipped.',
    img: scorekeeper,
    imgAlt: 'Ping pong score keeper web app with two player scores',
    urlLabel: 'github.com/gorock007',
    url: 'https://github.com/gorock007/PingPong-ScoreKeeper',
    size: 'sm',
  },
]
