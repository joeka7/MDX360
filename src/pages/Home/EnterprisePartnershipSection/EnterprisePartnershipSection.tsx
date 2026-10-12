import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Icon } from '@/components/ui';
import { capabilities } from '../content';
import styles from './EnterprisePartnershipSection.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Home "Enterprise Partnership" ("Partnership Journey"): the four services as one timeline of
 * WAI-ARIA tabs (automatic activation) above a navy detail panel. All panels share one grid cell,
 * so switching never shifts the layout, and every description stays in the DOM. The section
 * reveals once on scroll; it only starts hidden after JS has opted in (`data-motion="ready"`),
 * and never under reduced motion or without IntersectionObserver.
 */
export function EnterprisePartnershipSection() {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const titleId = `${baseId}-title`;
  const count = capabilities.length;
  const total = pad(count);

  const select = (index: number, moveFocus = false) => {
    const next = (index + count) % count;
    setActive(next);
    if (moveFocus) tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const targets: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: count - 1,
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    select(targets[event.key], true);
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || typeof IntersectionObserver === 'undefined') return;

    root.dataset.motion = 'ready';
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          root.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      delete root.dataset.motion;
    };
  }, []);

  return (
    <section ref={rootRef} className={styles.section} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Enterprise Partnership
            </p>
            <h2 id={titleId} className={styles.title}>
              Engineered for Clinical Excellence <span className={styles.titleAccent}>&amp; Global Impact</span>
            </h2>
          </div>
          <p className={styles.lead}>
            MDX360 provides turnkey, white-glove equipment infrastructure for leading dermatology institutes,
            aesthetic clinics, and regenerative hospital networks worldwide.
          </p>
        </header>

        <div
          className={styles.track}
          role="tablist"
          aria-label="Partnership services"
          data-step={active}
          onKeyDown={onTabKeyDown}
        >
          <span className={styles.rail} aria-hidden="true">
            <span className={styles.railFill} />
          </span>

          {capabilities.map((capability, i) => (
            <button
              key={capability.title}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              data-state={i === active ? 'active' : i < active ? 'done' : 'idle'}
              onClick={() => select(i)}
            >
              <span className={styles.node}>
                <Icon name={capability.icon} size={22} />
              </span>
              <span className={styles.stepNumber} aria-hidden="true">
                {pad(i + 1)}
              </span>
              <span className={styles.tabTitle}>{capability.title}</span>
            </button>
          ))}
        </div>

        <div className={styles.stage} data-step={active}>
          <span className={styles.stageProgress} aria-hidden="true" />
          {capabilities.map((capability, i) => (
            <div
              key={capability.title}
              role="tabpanel"
              id={`${baseId}-panel-${i}`}
              aria-labelledby={`${baseId}-tab-${i}`}
              tabIndex={0}
              className={styles.panel}
              data-active={i === active ? 'true' : 'false'}
            >
              <div className={styles.numeral} aria-hidden="true">
                {pad(i + 1)}
              </div>
              <div className={styles.panelBody}>
                <p className={styles.kicker} aria-hidden="true">
                  {pad(i + 1)} / {total}
                </p>
                <h3 className={styles.panelTitle}>{capability.title}</h3>
                <p className={styles.panelText}>{capability.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
