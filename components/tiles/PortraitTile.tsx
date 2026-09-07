import Image from 'next/image'
import portrait from '@/assets/images/portrait.jpg'
import portraitLaughing from '@/assets/images/portrait-laughing.jpg'
import { profile } from '@/data/siteLinks'
import Tile from '../Tile'

// Both frames are laid out by .portrait-tile img: out of flow and cover-cropped
// to the 328 module, so `fill` is what next/image needs here — an intrinsic
// 533×800 would push the row to 492px and stretch every tile beside it.
const SIZES = '(max-width: 767px) 100vw, 328px'

const PortraitTile = () => (
  <Tile size="sm" className="portrait-tile">
    <Image
      src={portrait}
      alt={`${profile.name}, photographed outdoors`}
      fill
      sizes={SIZES}
    />
    {/* The same frame, laughing, cross-faded in on hover. Decorative: the
        image underneath already names the subject, so announcing this one
        would just repeat it. */}
    <Image
      className="portrait-hover"
      src={portraitLaughing}
      alt=""
      aria-hidden="true"
      fill
      sizes={SIZES}
    />
  </Tile>
)

export default PortraitTile
