# Next Faster

The project-specific language of this Next.js starter template. A glossary of the conventions a developer or agent must know to work in this repo — not a spec.

## Language

**Private route**:
A page under the `(private)` route group; requires an authenticated Supabase user. Membership is declared in `_ROUTE_PRIVATES` (`constants/route.ts`) and enforced by the Supabase middleware.

**Public route**:
A page under the `(public)` route group, reachable without auth (e.g. `/auth`).

**Response envelope**:
The `{ error, data }` object every server action returns. Success carries `data.payload`; failure carries `error.{ status, message }`. Built via `SuccessResponse`/`ErrorResponse`.
_Avoid_: result, payload (alone)

**Dynamic component**:
An async Server Component (file named `dynamic.tsx`) that fetches data and is rendered inside a `<Suspense>` boundary by its sibling `page.tsx`.

**Client component file** (`*.client.tsx`):
A component file marked `"use client"`. The `.client` suffix flags it at a glance.

**Server action file** (`actions.ts`):
A colocated `"use server"` module holding a route's server actions.

**Cache tag**:
A named constant in `constants/cache.ts` (e.g. `_CACHE_NICKNAMES`) used with `"use cache"` / `cacheTag` to scope cache revalidation.
