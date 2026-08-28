# MISSING: PUN — App Store metadata

## App record

- **Name:** MISSING: PUN
- **Subtitle:** The house moves unseen
- **Bundle ID:** `com.rokage.missingpun`
- **SKU:** `missing-pun-ios-1`
- **Primary language:** English (UK)
- **Primary category:** Games
- **Subcategory:** Adventure
- **Secondary category:** Entertainment
- **Price:** Free
- **In-app purchases:** None
- **Advertising:** None
- **Copyright:** 2026 Rowan Amin

The bundle ID is a proposed value. Confirm it before creating the App Store Connect record; it cannot be changed after a build is uploaded.

## URLs

- **Support URL:** `https://rokage38.github.io/escapethehouse/support.html`
- **Privacy Policy URL:** `https://rokage38.github.io/escapethehouse/privacy.html`
- **Marketing URL:** `https://rokage38.github.io/escapethehouse/`

The first two URLs become live after the new pages are pushed to GitHub Pages.

## Promotional text

Recover Pun's case file, pin the rooms in place, and escape before the house rewrites your way out.

## Description

Pun entered the house at the end of the lane. He never came back out.

MISSING: PUN is a real-time 3D survival-horror game set inside a procedural house that changes during the investigation. Recover an impossible photograph, an answerphone cassette and a crossed-out floor plan. Every discovery pins one room in place—but somewhere nobody is looking, another corridor closes and a new one appears.

Pun listens to how you play. Running carries into the next room, and a hiding place used too often may no longer stay safe. Watch for the warning, change your route and get the completed case file to the door.

Play solo, escape together using a private room code, or let one friend become Pun and spend house rage to rewrite unseen passages.

FEATURES

• A newly generated house every run
• Corridors that change during the investigation
• Story-based evidence and pinned safe rooms
• Adaptive hiding and sound detection
• Solo, cooperative and player-versus-Pun modes
• Landscape touch controls and adjustable brightness
• No ads and no in-app purchases

Contains horror, violence, blood and strong language.

## Keywords

`horror,survival,escape,procedural,multiplayer,monster,co-op,case,evidence,haunted`

## App Review notes

MISSING: PUN is an original real-time 3D horror game bundled inside the app; it does not display or depend on the hosted website. Solo mode is fully playable without a network connection. Multiplayer is optional and uses private room codes with Supabase Realtime. No account is required.

The iOS release does not include voice chat and does not request microphone access. There are no ads, purchases, subscriptions, analytics or tracking.

To test multiplayer, install the build on two devices. On the missing-person poster, enter a name, create a new room on one device and enter its four-character code on the other. The host can choose cooperative play or assign one player as Pun.

## App Privacy answers

Use this conservative disclosure for the first release:

- Data collected: **Yes**
- **Gameplay Content** — App Functionality; not used for tracking
- **User ID** — App Functionality; not used for tracking

The User ID is the player-selected nickname/random session identifier. Gameplay Content is temporary room and live-match state processed through Supabase. Neither is used for advertising or analytics. Confirm Supabase retention and logging settings before publishing the answers.

## Age rating questionnaire

Recommended answers based on the current build:

- Profanity or crude humour: **Frequent**
- Horror or fear themes: **Frequent**
- Cartoon or fantasy violence: **Frequent**
- Realistic violence: **None** if the final low-poly presentation remains clearly stylised; otherwise **Infrequent**
- Messaging and chat: **No** for this iOS release
- User-generated content: **No**
- Unrestricted web access: **No**
- Advertising, gambling, contests, sexual content, drugs and medical content: **No**

Apple calculates the final rating. Do not under-rate the blood, dead bodies, horror or repeated strong spoken language.

## Export compliance

The app uses ordinary HTTPS/WSS networking and no custom cryptography. `ITSAppUsesNonExemptEncryption` is set to `false` in the iOS project.
