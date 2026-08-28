# Escape the House — iOS release runbook

## Already configured

- Capacitor 8 native shell
- Proposed bundle ID: `com.rokage.escapethehouse`
- App name: Escape the House
- Landscape touch layout with iPhone/iPad safe areas
- Locally bundled game, images, audio, and fonts
- Solo play without a network connection
- Multiplayer through the existing Supabase Realtime room system
- Voice chat disabled on native iOS for the first release
- App icon and splash artwork
- Privacy and support pages
- No ads, analytics, purchases, or tracking

## One-time Apple setup

1. Enrol as an individual at `https://developer.apple.com/programs/enroll/` using the Apple Account whose legal name is Rowan Amin.
2. Wait for Apple to activate the paid membership.
3. On your Mac, install the current public Xcode from the Mac App Store and sign in under **Xcode → Settings → Accounts**.
4. Sign in to `https://appstoreconnect.apple.com/`, accept any pending agreements, then create a new iOS app record using `APP_STORE_METADATA.md`.

## Generate or refresh the native project

From the repository root:

```bash
npm install
npm run ios:release
npm run ios:open
```

Run `npm run ios:release` again after any web-game change. It rebuilds the local web bundle, syncs it into Xcode, and regenerates iOS icons and splash assets.

## Xcode checklist

1. Select the **App** project and **App** target.
2. In **Signing & Capabilities**, select Rowan Amin's paid developer team and leave **Automatically manage signing** enabled.
3. Confirm the bundle identifier exactly matches the App Store Connect record.
4. In **General**, confirm version `1.0.0`, build `1`, and landscape orientations.
5. Select a real iPhone or iPad and run the game.
6. Test solo play in airplane mode, then multiplayer online on two devices.
7. Confirm the app never displays or asks for microphone access.

## Upload

1. In Xcode, select **Any iOS Device (arm64)** as the run destination.
2. Choose **Product → Archive**.
3. In Organizer, choose **Distribute App → App Store Connect → Upload**.
4. Wait for processing, then select the build in App Store Connect.
5. Enter the listing, privacy, rating, review notes, and URLs from `APP_STORE_METADATA.md`.
6. Add screenshots captured from a real device or Simulator. Use clean gameplay/menu screens and do not include transparency.
7. Submit to TestFlight first, test the processed build, then submit that build for App Review.

## Before Submit for Review

- Privacy and support URLs load publicly over HTTPS.
- The App Store seller name displays as Rowan Amin.
- The price is Free and no in-app purchases are attached.
- App Privacy answers include temporary multiplayer Gameplay Content and User ID.
- The age questionnaire accurately reflects the current horror, violence, blood, and strong language.
- App Review notes explain offline solo play, private room-code multiplayer, and the absence of iOS voice chat.
- A second device has successfully joined a room using a fresh production build.
