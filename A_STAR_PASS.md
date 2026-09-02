# MISSING: PUN — A-star pass

This branch starts from GitHub commit `4258362` and keeps the original game playable while changing its identity and core loop.

## Implemented

- Renamed the game and native app to **MISSING: PUN**.
- Replaced generic keys with four story-based evidence objects: an impossible photograph, answerphone cassette, crossed-out floor plan and Pun's wristwatch.
- Added a case-file reveal and visible floor pin when evidence is recovered.
- Added the living-house rule: each clue pins its room, closes one unseen corridor and opens another.
- The corridor planner refuses any rewrite that could disconnect the house, touch a pinned room, affect the start/exit, cover active objects or happen near a player.
- Synchronized evidence, pinned rooms and exact corridor rewrites in multiplayer, including late joiners.
- Made sprinting audible to Pun from approximately one additional room.
- Made repeatedly used wardrobes/beds learnable, with a clear knock and 1.85-second escape warning before Pun checks them.
- Added a house-rage corridor rewrite power for a human-controlled Pun, usable with **E** or **SHIFT** on the touch action button.
- Added adjustable shader-level lantern brightness.
- Added a new text-free App Store icon and matching launch screen.
- Restored native landscape/safe-area behaviour and disabled microphone/voice chat in the first iOS build.
- Updated App Store listing copy, privacy/support pages and the iOS release runbook.

## Verification completed

- All inline JavaScript compiles.
- Manifest, package and Capacitor JSON files parse.
- Root, generated web and embedded iOS web copies match.
- Local HTML assets resolve in all three copies.
- 450 generated houses across all difficulties stayed connected before and after a rewrite.
- Every tested rewrite preserved start, exit, pinned rooms and total walkable area.
- Evidence collection, duplicate rejection, endgame, multiplayer shift and late-join state tests passed.
- Repeated-hiding warning/escape and player-Pun rage/cooldown tests passed.
- App icon is 1024×1024, RGB and has no alpha channel.
- Production dependency audit reports zero vulnerabilities.

## Still requires a Mac

This environment cannot run Xcode or create an Apple-signed archive. On the Mac:

```bash
npm install
npm run ios:release
npm run ios:open
```

Then select Rowan Amin's Apple Developer team, run on a real device, test multiplayer on two devices and upload a TestFlight archive. Full submission steps and listing copy are in `IOS_RELEASE.md` and `APP_STORE_METADATA.md`.

## Final checks before publishing

- Confirm `MISSING: PUN` can be reserved in App Store Connect.
- Confirm written commercial permission for any real person's photograph and recorded voice used in the game.
- Publish `privacy.html` and `support.html` so their GitHub Pages URLs are live.
- Capture final landscape screenshots from a real device or Simulator.
