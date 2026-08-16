# Hero carousel design QA

## Evidence

- Source visual truth: latest user-provided conversation attachment on 2026-08-16 (`1024 × 1536` pixels). The scoped target is the main carousel treatment: inset rounded frame, side arrows, lower indicators, and compact vertical proportion. The animal-center branding, navigation, imagery, and lower quick-guide content are reference-only and are outside this component change.
- Primary implementation capture: `/tmp/lotte-hero-1024x1536.png`.
- Responsive implementation capture: `/tmp/lotte-hero-mobile-clean.png`.
- Supporting slide captures: `/tmp/lotte-slide-2-desktop.png`, `/tmp/lotte-slide-3-desktop.png`, `/tmp/lotte-slide-2-mobile.png`, and `/tmp/lotte-slide-3-mobile-recheck.png`.
- Primary viewport: `1024 × 1536` CSS pixels at device scale factor `1`. Implementation output is also `1024 × 1536` pixels, so no density normalization was required.
- Responsive viewport: `390 × 844` CSS pixels at device scale factor `1`.
- State: first slide selected for primary comparison; second and third slides separately checked after their crossfade completed.

## Full-view comparison

The implementation matches the scoped reference composition: the carousel is inset `32px` at the `1024px` viewport, measures `960 × 583.7px`, uses a rounded clipped image frame, places circular previous/next controls across the frame edges, and centers compact pill indicators near the lower edge. The image region is no longer viewport-height. On mobile, the frame measures `358 × 507px`, has no horizontal overflow, hides the side arrows, and preserves the same visual hierarchy with swipe navigation.

The source page has a two-level animal-center header, while this site retains its existing single-level LOTTE CASTLE header and project content. This is intentional product context preservation, not carousel design drift.

## Focused-region comparison

- Controls: the reference's translucent circular edge arrows and short lower progress pills are matched with `58px` desktop arrow buttons, generous focus rings, and active/inactive pill states. Mobile removes the arrows as requested and uses direct touch swiping.
- Image treatment: all three slides use existing project marketing imagery rather than generated substitutes. Desktop and mobile crops were checked individually; brochure headers and footers are excluded from the visible frame.
- Content overlay: the reference's left-aligned desktop copy and single primary CTA are retained in structure, while LOTTE CASTLE navy/gold tokens and existing property copy replace the unrelated reference brand.

## Required fidelity surfaces

- Fonts and typography: existing Pretendard typography is preserved. Desktop hierarchy is left aligned; mobile hierarchy is centered and remains within the frame without truncation.
- Spacing and layout rhythm: reference-like outer inset, `16px` desktop radius, `12px` mobile radius, edge-straddling controls, and compact lower indicators are present. The primary carousel dimensions closely match the source at the same width.
- Colors and visual tokens: reference geometry is followed while the site's existing navy, white, and muted-gold tokens are intentionally retained for brand consistency and adequate contrast.
- Image quality and asset fidelity: original project raster assets are used through `next/image`; the initial slide alone is preloaded. Each crop was visually checked at desktop and mobile widths.
- Copy and content: the existing LOTTE CASTLE project message and registration CTA are intentionally retained. Reference animal-center text was not copied.

## Interaction and runtime checks

- Automatic rotation: verified slide index `0 → 1` after `4.3s`.
- Next arrow: verified slide index `1 → 2`.
- Mobile left swipe: verified slide index `0 → 1`.
- Reduced motion: autoplay and crossfade are disabled by `prefers-reduced-motion` handling.
- Responsive overflow: mobile `bodyScrollWidth` and viewport width both measured `390px`.
- Browser console/runtime errors: none observed during desktop, mobile, arrow, autoplay, and swipe checks.

## Comparison history

1. Earlier implementation used a full-bleed hero and centered content. After the user's updated reference, this was classified as a major target mismatch.
2. The hero was rebuilt as an inset rounded card, content was left aligned on desktop, side arrows and lower pills were added, mobile arrows were removed in favor of swipe, and the frame height was reduced.
3. Post-fix evidence at `1024 × 1536` shows the target `960px`-wide inset frame and approximately `584px` height; desktop and mobile supporting captures show valid crops for every registered slide.

## Findings

- No actionable P0, P1, or P2 differences remain within the requested carousel scope.
- P3: the full page does not reproduce the reference's unrelated two-row animal-center header and quick-guide sections; the existing LOTTE CASTLE product structure is intentionally preserved.

## Implementation checklist

- [x] Inset rounded carousel frame
- [x] Desktop previous/next controls
- [x] Four-second automatic rotation and wraparound
- [x] Mobile horizontal swipe with vertical scrolling preserved
- [x] Active/inactive lower indicators
- [x] Responsive compact frame height
- [x] Keyboard arrow support and labeled controls
- [x] Reduced-motion handling
- [x] Desktop/mobile visual and interaction checks

final result: passed
