# Rakuten Loyalty App Prototype

A mobile-first prototype of a Rakuten-style loyalty and shopping journey centered on Hanako.

This prototype is designed to feel like a real customer app, not a presentation.

All values, balances, points, statuses, and counts are illustrative only and subject to programme rules.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (default: http://localhost:5173/).

## Build check

```bash
npm run build
```

## Customer journey in the app

1. Home: loyalty status, points overview, and benefits summary.
2. Link prompt: if account is not linked, customer sees a native setup prompt.
3. Link flow: simulated 3-step account linking (confirm, review, success).
4. Home return: linked status updates and personalised benefits become ready.
5. Incentive module: native household offer teaser in the shopping flow.
6. Benefits: customer explores available benefits and progress hints.
7. Shop: home electronics browsing (including electric kettles).
8. Offer detail: customer views and saves a relevant household offer.
9. Offer saved: customer can continue shopping or view saved benefits.
10. Saved benefits: dedicated screen for saved household value.
11. Points: points utility and selected use cases with compliant language.
12. Progress: monthly loyalty recap and next recommended action.

## Navigation model

Bottom navigation:

- Home
- Shop
- Benefits
- Points
- Progress

The experience is one connected app flow rather than isolated demo chapters.

## Hidden presenter mode

Presenter mode is hidden by default.

- Toggle presenter controls with keyboard shortcut `P`.
- On desktop, presenter controls open as a right-side rail.
- Internal reasoning content is separated from customer-facing screens.

Presenter mode may include internal terms and mechanics for presales explanation.
Customer-facing UI should not expose internal/vendor language.

## State model

The app uses local prototype state only (React context + component state).

No real backend calls, authentication, payment processing, or customer data are used.

## Mock data

Mock data is separated from UI under `src/mock-data` and includes:

- user persona (Hanako)
- recent context and browsing context
- products and offer data
- points utility content
- monthly progress metrics

## Assumptions

- Happy Program mechanics shown are illustrative placeholders.
- Linking flow is simulated and does not perform real registration.
- Offer availability and points outcomes are demo values for storytelling.
- Programme timing and rule disclaimers are intentionally shown where needed.

## Notes

- The prototype supports a customer-safe journey in the main UI.
- Internal decisioning/rationale content is available only through hidden presenter mode.
