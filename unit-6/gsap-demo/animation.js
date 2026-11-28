// ============================================================
// HOW TO USE THIS FILE
// Delete the "/*" line and the "*/" line around a step to turn it on.
// Steps marked TEMPORARY: re-comment them when the part is done.
// Steps marked REPLACES: re-comment the earlier step first.
// Only one "const tl" can be active at a time.
// ============================================================


// ============================================================
// >>> STEP 1  |  PART 2: REGISTER SCROLLTRIGGER
// >>> KEEP ON for the rest of the video.
// ============================================================
// /*
// // Register plugins before any animation code
gsap.registerPlugin(ScrollTrigger);
// */


// ============================================================
// >>> STEP 2  |  PART 3: THE THREE TWEENS
// >>> TEMPORARY. Turn on one tween at a time, then re-comment all
// >>> three before Step 3.
// ============================================================

// --- 2A: to() ---

// // 1. to(): from current state to my values
// gsap.to('.panel-1', { x: 200, duration: 1 });


// // --- 2B: from() ---

// // 2. from(): from my values to current state
// gsap.from('.panel-2', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' });


// // --- 2C: fromTo() ---

// // 3. fromTo(): I set both start and end
// gsap.fromTo('.badge',
//   { scale: 0.8, opacity: 0 },
//   { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
// );



// ============================================================
// >>> STEP 3  |  PART 4: DELAYS VS TIMELINE
// >>> TEMPORARY. Re-comment Step 2 first.
// ============================================================

// --- 3A: the hard way (calculated delays) ---
// LIVE EDIT: change panel-1 duration from 0.5 to 1 and reload.
// Then re-comment 3A before turning on 3B.

gsap.from('.panel-1', { opacity: 0, x: -60, duration: 0.5 });
gsap.from('.panel-2', { opacity: 0, x: -60, duration: 0.5, delay: 0.5 });
gsap.from('.panel-3', { opacity: 0, x: -60, duration: 0.5, delay: 1 });


// --- 3B: the timeline way ---
// LIVE EDIT: panel-1 starts at 1, then change it back to 0.5.
// Re-comment 3B before turning on Step 4.

const tl = gsap.timeline();

tl.from('.panel-1', { opacity: 0, x: -60, duration: 1 })
  .from('.panel-2', { opacity: 0, x: -60, duration: 0.5 })
  .from('.panel-3', { opacity: 0, x: -60, duration: 0.5 });



// ============================================================
// >>> STEP 4  |  PART 5: THE POSITION PARAMETER
// >>> REPLACES Step 3B. Re-comment 3B first.
// >>> OPTIONAL LIVE EDIT: change the badge position from '<' to 1,
// >>> reload, then change it back.
// ============================================================

const tl = gsap.timeline();

tl.from('.panel-1', { opacity: 0, x: -60, duration: 0.5, ease: 'power2.out' })
  // "+=0.2": start 0.2s AFTER the previous tween ends (a gap)
  .from('.panel-2', { opacity: 0, x: -60, duration: 0.5, ease: 'power2.out' }, '+=0.2')
  // "-=0.3": start 0.3s BEFORE the previous tween ends (an overlap)
  .from('.panel-3', { opacity: 0, x: -60, duration: 0.5, ease: 'power2.out' }, '-=0.3')
  // "<": start at the SAME TIME as the previous tween
  .from('.badge', { scale: 0, duration: 0.3, ease: 'back.out(1.7)' }, '<');



// ============================================================
// >>> STEP 5  |  PART 6: TIMELINE DEFAULTS
// >>> REPLACES Step 4. Re-comment Step 4 first.
// >>> KEEP ON for the rest of the video.
// ============================================================

const tl = gsap.timeline({
  defaults: { duration: 0.5, ease: 'power2.out' }
});

tl.from('.panel-1', { opacity: 0, x: -60 })
  .from('.panel-2', { opacity: 0, x: -60 }, '+=0.2')
  .from('.panel-3', { opacity: 0, x: -60 }, '-=0.3')
  .from('.badge', { scale: 0, duration: 0.3, ease: 'back.out(1.7)' }, '<');



// ============================================================
// >>> STEP 6  |  PART 7: REPLAY BUTTON
// >>> Then in the browser console, run: tl.timeScale(0.2)
// >>> Put it back with: tl.timeScale(1)
// >>> KEEP ON for the rest of the video.
// ============================================================

document.querySelector('#replay').addEventListener('click', () => {
  tl.restart();
});



// ============================================================
// >>> STEP 7  |  PART 8A: SCROLLTRIGGER, PLAY ON ENTER
// >>> KEEP ON. Remove markers before submitting.
// ============================================================

gsap.from('.reveal', {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.reveal',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    markers: true // remove before shipping
  }
});



// ============================================================
// >>> STEP 8  |  PART 8B: SCROLLTRIGGER, SCRUB AND PIN
// >>> KEEP ON. Remove markers before submitting.
// ============================================================

const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.pin-section',
    start: 'top top',
    end: '+=600',
    scrub: 1,
    pin: true,
    markers: true // remove before shipping
  }
});

scrollTl.from('.step-1', { opacity: 0, x: -100 })
  .from('.step-2', { opacity: 0, x: -100 }, '+=0.2')
  .from('.step-3', { opacity: 0, x: -100 }, '+=0.2');



// ============================================================
// >>> STEP 9  |  PART 10: REDUCED MOTION WITH matchMedia
// >>> After turning this on, emulate reduced motion in DevTools
// >>> and reload.
// ============================================================

gsap.matchMedia().add({
  // Full motion for users who have not opted out
  '(prefers-reduced-motion: no-preference)': () => {
    gsap.from('.card', {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.card-grid', start: 'top 80%' }
    });
  },
  // Reduced motion: no entrance animation, cards visible immediately
  '(prefers-reduced-motion: reduce)': () => {
    gsap.set('.card', { opacity: 1, y: 0 });
  }
});
