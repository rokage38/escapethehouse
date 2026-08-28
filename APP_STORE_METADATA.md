# Escape the House — App Store metadata

## App record

- **Name:** Escape the House
- **Subtitle:** Find the keys. Escape Pun.
- **Bundle ID:** `com.rokage.escapethehouse`
- **SKU:** `escape-the-house-ios-1`
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

Find the keys, hide from Pun, and make it out alive—alone or with friends.

## Description

The door is somewhere in the dark. So is Pun.

Escape the House is a first-person horror game set inside a bloodied, procedurally generated house. Search every room for the keys you need, hide in wardrobes and under beds, and run for the exit before Pun finds you.

Play solo or create a private room code and escape with friends. Every run rearranges the house, so no route stays safe for long.

FEATURES

• A newly generated house every run
• Simple landscape touch controls
• Solo play available offline
• Private room-code multiplayer
• Multiple difficulty settings
• No ads and no in-app purchases

Contains horror, violence, blood, and strong language.

## Keywords

`horror,escape,house,keys,monster,scary,survival,multiplayer,adventure,procedural`

## App Review notes

Escape the House is an original real-time 3D horror game bundled in the app; it does not load the hosted website. Solo mode is fully playable without a network connection. Multiplayer is optional and uses a private room code with Supabase Realtime. No account is required. The iOS release does not include voice chat or request microphone access. There are no ads, purchases, subscriptions, analytics, or tracking.

To test multiplayer, install the build on two devices, choose **Multiplayer**, create a room on one device, and enter the displayed room code on the other.

## App Privacy answers

Use this conservative disclosure for the first release:

- Data collected: **Yes**
- **Gameplay Content** — App Functionality; not used for tracking
- **User ID** — App Functionality; not used for tracking

The User ID is the player-selected nickname/random session identifier. Gameplay Content is temporary room and live-match state processed through Supabase. Neither is used for advertising or analytics. Confirm Supabase retention and logging settings before publishing the answers.

## Age rating questionnaire

Recommended answers based on the current build:

- Profanity or crude humor: **Frequent**
- Horror or fear themes: **Frequent**
- Cartoon or fantasy violence: **Frequent**
- Realistic violence: **None** if the final low-poly presentation remains clearly stylised; otherwise **Infrequent**
- Messaging and chat: **No** for this iOS release
- User-generated content: **No**
- Unrestricted web access: **No**
- Advertising, gambling, contests, sexual content, drugs, and medical content: **No**

Apple calculates the final rating. Do not under-rate the blood, dead bodies, horror, or repeated strong spoken language.

## Export compliance

The app uses ordinary HTTPS/WSS networking and no custom cryptography. `ITSAppUsesNonExemptEncryption` is set to `false` in the iOS project.
