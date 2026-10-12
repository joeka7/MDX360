/**
 * Shared IntersectionObserver options for the home sections' one-shot scroll reveals: content
 * starts revealing once 15% of it is visible and clear of the bottom 10% of the viewport.
 */
export const REVEAL_OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: '0px 0px -10% 0px',
};
