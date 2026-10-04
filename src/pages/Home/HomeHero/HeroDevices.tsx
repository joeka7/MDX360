import { company } from '@/data/site';
import styles from './HomeHero.module.css';

interface HeroDevicesProps {
  /** Model named in the flagship callout. */
  flagshipName: string;
}

/*
 * Scene geometry, in viewBox units (720 × 540). The device symbol is 220 × 364; each `use`
 * scales it to its width. The callout's HTML label is positioned against the same box in
 * HomeHero.module.css, so the two stay aligned at any size.
 */
const DEVICE_RATIO = 364 / 220;
const flagship = { x: 242, y: 110, width: 236 };
const companions = [
  { x: 118, y: 185, width: 160 },
  { x: 442, y: 185, width: 160 },
];

/**
 * Placeholder device lineup: the flagship in front, two companion systems behind it.
 * Drawn inline until cut-out product photography (transparent background) is available.
 */
export function HeroDevices({ flagshipName }: HeroDevicesProps) {
  return (
    <div className={styles.panel}>
      <figure className={styles.stage}>
        <svg
          className={styles.scene}
          viewBox="0 0 720 540"
          role="img"
          aria-label={`Three ${company.name} treatment systems on a floor: the flagship ${flagshipName} in front, with two companion systems behind it.`}
        >
          <defs>
            <symbol id="hero-device" viewBox="0 0 220 364">
              {/* Handpiece cable, behind the body */}
              <path d="M188 178 C 216 214 214 262 176 288" fill="none" stroke="#c3cbd4" strokeWidth="2" strokeLinecap="round" />
              {/* Screen */}
              <rect x="44" y="4" width="132" height="96" rx="14" fill="#fff" stroke="#d3d9e0" strokeWidth="1.5" />
              <rect x="54" y="14" width="112" height="76" rx="6" fill="#16202c" />
              <rect x="66" y="28" width="56" height="3" rx="1.5" fill="#3a4757" />
              <rect x="66" y="38" width="36" height="3" rx="1.5" fill="#3a4757" />
              <rect x="66" y="72" width="44" height="3" rx="1.5" fill="#0dc2ff" />
              {/* Neck and body */}
              <rect x="98" y="99" width="24" height="23" fill="#eef1f4" stroke="#d3d9e0" strokeWidth="1.5" />
              <rect x="40" y="120" width="140" height="196" rx="22" fill="#fff" stroke="#d3d9e0" strokeWidth="1.5" />
              <path d="M60 152 H160" stroke="#e3e8ed" strokeWidth="1.5" />
              <path d="M92 278 H128 M92 286 H128 M92 294 H128" stroke="#e3e8ed" strokeWidth="2" strokeLinecap="round" />
              <circle cx="110" cy="137" r="3" fill="#0dc2ff" />
              {/* Handpiece in its side holder */}
              <rect x="181" y="112" width="14" height="66" rx="7" fill="#fff" stroke="#d3d9e0" strokeWidth="1.5" />
              <rect x="183.5" y="114" width="9" height="12" rx="4.5" fill="#d3d9e0" />
              <rect x="178" y="150" width="20" height="26" rx="6" fill="#eef1f4" stroke="#d3d9e0" strokeWidth="1.5" />
              {/* Base and wheels */}
              <rect x="30" y="314" width="160" height="24" rx="10" fill="#eef1f4" stroke="#d3d9e0" strokeWidth="1.5" />
              <circle cx="54" cy="350" r="11" fill="#2a3441" />
              <circle cx="166" cy="350" r="11" fill="#2a3441" />
            </symbol>
          </defs>

          <ellipse cx="360" cy="480" rx="336" ry="56" fill="#eaeef2" />

          <g opacity="0.62">
            {companions.map((device) => (
              <g key={device.x}>
                <ellipse
                  cx={device.x + device.width / 2}
                  cy={device.y + device.width * DEVICE_RATIO - 2}
                  rx={device.width * 0.44}
                  ry="6"
                  fill="#0e1a2b"
                  fillOpacity="0.08"
                />
                <use href="#hero-device" x={device.x} y={device.y} width={device.width} height={device.width * DEVICE_RATIO} />
              </g>
            ))}
          </g>

          <ellipse
            cx={flagship.x + flagship.width / 2}
            cy={flagship.y + flagship.width * DEVICE_RATIO - 3}
            rx={flagship.width * 0.44}
            ry="9"
            fill="#0e1a2b"
            fillOpacity="0.1"
          />
          <use href="#hero-device" x={flagship.x} y={flagship.y} width={flagship.width} height={flagship.width * DEVICE_RATIO} />

          {/* Callout leader from the flagship's upper right to the label */}
          <path d="M424 122 L492 58 H700" fill="none" stroke="#9aa5b2" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <circle cx="424" cy="122" r="5" fill="#0dc2ff" stroke="#fff" strokeWidth="2" />
        </svg>

        <figcaption className={styles.callout}>
          <span className={styles.calloutLabel}>Flagship</span>
          <span className={styles.calloutName}>{flagshipName}</span>
        </figcaption>
      </figure>
    </div>
  );
}
