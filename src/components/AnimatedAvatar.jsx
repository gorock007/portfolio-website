const AnimatedAvatar = () => (
  <figure className="animated-avatar" aria-label="An animated abstract portrait of Gorock">
    <svg viewBox="0 0 240 260" role="img" aria-hidden="true">
      <path
        className="avatar-shadow"
        d="M46 224c34 22 116 23 151 0 14-9 13-23-2-31-35-19-112-19-147 0-15 8-16 22-2 31Z"
      />
      <g className="avatar-character">
        <path
          className="avatar-neck"
          d="M95 181h50l8 40H87l8-40Z"
        />
        <path
          className="avatar-shirt"
          d="M55 244c3-30 24-47 65-47s62 17 65 47H55Z"
        />
        <path
          className="avatar-head"
          d="M59 98c0-51 24-75 63-75 40 0 62 25 60 76l-4 46c-3 32-25 53-57 53-33 0-55-21-58-53l-4-47Z"
        />
        <path
          className="avatar-hair"
          d="M61 106C49 58 77 15 124 17c41 2 67 31 58 82-13-25-35-35-65-30-21 4-36 16-56 37Z"
        />
        <path className="avatar-ear avatar-ear-left" d="M64 116c-16-3-17 30 3 34" />
        <path className="avatar-ear avatar-ear-right" d="M177 116c16-3 17 30-3 34" />
        <g className="avatar-eyes">
          <ellipse className="avatar-eye" cx="96" cy="119" rx="5" ry="7" />
          <ellipse className="avatar-eye avatar-eye-lag" cx="146" cy="119" rx="5" ry="7" />
        </g>
        <path className="avatar-brow" d="M84 105c8-5 18-5 26 0M134 105c8-5 18-5 25 1" />
        <path className="avatar-nose" d="M122 120c-2 12-4 20 4 23" />
        <path className="avatar-mouth" d="M105 159c11 7 23 7 34-1" />
        <path className="avatar-spark avatar-spark-one" d="M39 55v18M30 64h18" />
        <path className="avatar-spark avatar-spark-two" d="M197 38v12M191 44h12" />
      </g>
    </svg>
  </figure>
)

export default AnimatedAvatar
