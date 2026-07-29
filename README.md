# Flyff-SteamDeck

<p>
  <strong>Electron-based SteamDeck wrapper for <a href="https://universe.flyff.com">Flyff Universe</a></strong><br>
  Multiboxing • Automation • Gamepad Support • Quest progress tracking/guide
</p>

---

## 💡 Why This Exists

Playing Flyff Universe in a web browser on the Steam Deck is incredibly uncomfortable. The game requires a lot of keyboard keys for normal gameplay — buffs, heals, skill rotations, multi-boxing a RM — which is painful to manage with the virtual keyboard and without proper gamepad mapping.

Flyff-SteamDeck makes it so Flyff Universe can be played in the Gaming mode, so that you can map all the gamepad controls however you prefer it through the Steam controller layouts.

### ⚠️ Use at Your Own Risk

**You can use this wrapper in two ways:**

1. **Safe Mode (Gamepad + Multibox only)** — Use only the gamepad controls, quest guide, and multiboxing features. These are quality-of-life improvements for comfortable Steam Deck gameplay with no automation.

2. **Automation Mode (Higher Risk)** — Enable auto-heal, buff timers, macros, or auto-targeting. **These features may violate Flyff Universe's Terms of Service** and could result in account suspension or ban. Ban risk is unknown and varies by feature.

**Automation Feature Risk Assessment:**
- **Auto-Heal/MP/FP** — Medium risk (detectable input patterns)
- **Buff/Heal Timers** — Medium risk (detectable timing patterns, includes ±10% randomization)
- **Macros** — Medium risk (rapid key sequences)
- **Auto-Targeting (Spiral)** — ⚠️ **Experimental/High risk** — unreliable, not recommended for regular use

**If you only want comfortable SteamDeck controls, simply don't enable any automation features.** The core wrapper, multiboxing, and quest guide are safe quality-of-life improvements.

---

## 📥 Steam Deck Installation

1. Download the latest `Flyff-SteamDeck.AppImage` from the GitHub [Releases](https://github.com/daanheskes/flyff-steamdeck/releases).
2. Make the `Flyff-SteamDeck.AppImage` file executable: Choose one of the methods below:
  a. **GUI:** Right-click the file $\rightarrow$ **Properties** $\rightarrow$ **Permissions** tab $\rightarrow$ Check **Allow executing file as program**.
  b. **Terminal:** Run `chmod +x Flyff-SteamDeck.AppImage`.
3. Move the file into the Home folder: `/home/deck/`.
4. Add `/home/deck/Flyff-SteamDeck.sh` as a **Non-Steam Game**.
5. Return to the Gaming Mode in order to launch it.

6. (Optional) You can set the Flyff Universe artwork images through the use of [Decky](https://decky.xyz/), by installing the Decky plugin `SteamGridDB`. Once it's installed, navigate to game (Flyff-SteamDeck) and press the Options (`☰`) button → Select **Change Image...**
You might have to press the Filter-button to set the game to Flyff Universe in order to see the Flyff Universe images. Select the images you prefer and you're done!

## Updating to new Releases

1. Download the latest `Flyff-SteamDeck.AppImage` from the GitHub [Releases](https://github.com/daanheskes/flyff-steamdeck/releases).
2. Overwrite the old `Flyff-SteamDeck.AppImage` file with the new file.
3. Make the file executable: Choose one of the methods below:
  * **Terminal:** Run `chmod +x Flyff-SteamDeck.AppImage`
  * **GUI:** Right-click the file $\rightarrow$ **Properties** $\rightarrow$ **Permissions** tab $\rightarrow$ Check **Allow executing file as program**
4. Config data is stored elsewhere, your configurator and Steam controller settings will not be lost by updating.
*Tip: Config data is stored (in `/deck/home/.config/flyff-steamdeck` which is hidden by default, Check "Show Hidden Files" in the Dolphin file explorer if you want to see it)*

### Build from Source (for contributors)

```bash
git clone https://github.com/daanheskes/flyff-steamdeck.git
cd flyff-steamdeck
npm install
npm start              # dev mode
npm run build          # builds dist/Flyff-SteamDeck.AppImage
```

---

## 📸 Screenshots

### Gameplay - Dual Account Multiboxing
<p align="center">
  <img src="screenshots/gameplay-dual-account.png" alt="Dual Account Split-Screen" width="90%">
</p>

### Quest Guide - 501 Quests with Progress Tracking
<p align="center">
  <img src="screenshots/quest-guide-quests.png" alt="Quest Guide - Quests Tab" width="80%">
</p>

### Quest Guide - 36 Questlines with Progress Bars
<p align="center">
  <img src="screenshots/quest-guide-questlines.png" alt="Quest Guide - Questlines Tab" width="80%">
</p>

### Settings - Automation (Buff/Heal Timers)
<p align="center">
  <img src="screenshots/settings-automation.png" alt="Automation Settings" width="80%">
</p>

### Settings - Auto-Heal (Bar & Pixel Mode)
<p align="center">
  <img src="screenshots/settings-autoheal.png" alt="Auto-Heal Settings" width="80%">
</p>

---

## ✨ Features at a Glance

- **Up to 4 accounts simultaneously** — Account 1 & 2 always loaded, Account 3 & 4 optional (e.g. player shop in background)
- **Auto-Heal/MP/FP** — Bar-scan or pixel-based monitoring with multiple thresholds per bar
- **Automation Engine** — Timed buff/heal rotations that run even on background accounts
- **Macro Buttons** — Toolbar buttons for full buff sequences (configurable key lists)
- **Follow + Board Hotkey** — Press one button to send Z + Alt+6 (for follow + mount) to any account
- **Madrigal Guide** — 501 quests, 36 questlines, 939 monsters, daily quests, with quest progress tracking

---

## 🎮 Multiboxing (Up to 4 Accounts)

### Account 1 & 2
- **Always loaded** — each has isolated cookies/login state
- Full automation support (buff/heal/macros)
- Switch with **F9** (configurable in Settings → Hotkeys)
- Cannot be closed

### Account 3 & 4
- **Optional** — open via `+ Acc3` / `+ Acc4` buttons in toolbar
- Ideal for player shops running in background
- **Switch-only** — no automation buttons (just account switching)
- Close via `✕ Acc3` / `✕ Acc4` buttons

Only one account is visible at a time. Inactive accounts keep running in the background — automation continues.

---

## 💊 Auto-Heal / MP / FP

Automatically presses configured keys when HP/MP/FP drops below thresholds. Runs on **background accounts** too (no need to keep them visible).

### Setup

1. **Settings → Auto-Heal** tab
2. Choose **Bar** or **Pixel** mode for each bar (HP, MP, FP)

### Bar Mode (Recommended)

**Step-by-step setup:**
1. **Fill the bar** — Make HP/MP/FP bar **completely full** in-game (use potions/heals)
2. **Open picker** — Click **📐 button** next to the bar in Settings → Auto-Heal
3. **Select area** — A screenshot appears. **Drag-select** the entire bar area (left edge to right edge)
4. **Press Enter** — App calibrates left/right edges automatically and saves the area
5. **Add actions** — Click **+ action**, set Key (e.g. `1`) and Threshold % (e.g. `< 50%`)
6. **Set interval** — How often to check the bar (default: 0.5 sec for HP, 1 sec for MP/FP)
7. **Enable** — Check the ✓ checkbox to activate monitoring

**Multiple thresholds per bar:** Add multiple actions for layered healing (e.g. minor heal at 50%, emergency heal at 20%)

**Why full bar?** The app detects the bar's color (red=HP, blue=MP, green=FP) to calibrate the edges. A partial bar will cause incorrect calibration.

### Pixel Mode (Advanced)

**Use when Bar Mode fails** (e.g., unusual UI layouts):
1. **Fill the bar completely** in-game
2. **Switch dropdown** from "Bar" to "Pixel" mode
3. **Click 📍 button** — Screenshot appears
4. **Click once** on the bar at your desired threshold position (e.g., halfway for 50%)
5. **Press Enter** — Saves the pixel coordinates
6. **Add action** — Key + Threshold (50 = safe default, range 1–99)
7. **Set interval** and **Enable**

**How it works:** App checks if that specific pixel location shows the bar's color. If not, it triggers the heal.

**Tip:** For multiple thresholds, click **+ action** and use **📍** again to pick a different pixel (e.g., one at 50%, another at 20%).

### Test
Press **🔍** to test current reading without waiting for the heal cycle.

---

## ⚙️ Automation (Buff / Heal Timers)

Sends keypresses at fixed intervals — runs even when the account is in the background.

### Setup
1. **Settings → Automation** tab
2. Per account: Label, Key (1–0, F1–F12), Interval (seconds), Enable checkbox
3. `+ Add action` to add more, `✕` to remove
4. **💾 Save** — running automations restart immediately

### Control
- **Toolbar:** `▶ Acc1` / `■ Acc1` and `▶ Acc2` / `■ Acc2`
- **Hotkey:** **F10** (configurable) toggles automation for the active account
- Green toolbar buttons = automation running

**Default actions (disabled by default):**
| Label | Key | Interval |
|-------|-----|----------|
| Heal | 1 | 3 sec |
| Buff 1 | 2 | 30 sec |
| Buff 2 | 3 | 30 sec |

---

## 🚢 Follow + Board Hotkey

Sends **Z** (follow) + **Alt+6** (board) in sequence.

### Usage
- **Hotkey:** `,` (comma, configurable in Settings → Hotkeys) — sends to **active account**
- **Toolbar buttons:** `⛵ Acc1` and `⛵ Acc2` — send to **specific account** (even if in background)

Example: You're on Acc1, press the `⛵ Acc2` button → Acc2 executes follow+board in the background without switching views.

---

## 🛡️ Anti-Detection (Randomized Timing)

All automation intervals include **±10% random variation** to avoid constant timing patterns that might trigger anti-cheat detection. This makes automated actions appear more human-like.

**Example:**
- You set interval: `2 sec`
- Actual interval: randomly varies between `1.8–2.2 sec` each execution

**Applies to:**
- **Automation timers** (buff/heal rotations)
- **Auto-Heal polling** (HP/MP/FP check intervals)
- **Macro key delays**

No configuration needed — randomization is built-in and automatic.

---

## 🎮 Controller Configuration: Two Layers Explained

Change the controls in the Steam Deck controller configurator. The hotkeys below might be useful for mapping the buttons.

#### Hotkeys

| Key | Action | Configurable |
|-----|--------|:---:|
| **F9** | Switch active account | ✅ |
| **F10** | Toggle automation on active account | ✅ |
| **`,`** | Follow + Board (Z + Alt+6) on active account | ✅ |
| **F11** | Toggle fullscreen | ❌ |

**Important:** Wrapper hotkeys (F9, F10, comma) are captured globally and **will not reach the game**. If you need F9/F10 in-game (Action Bar switching), change the wrapper hotkeys in **Settings → Hotkeys** to different keys.

---

## 🗺️ Madrigal Guide

Click **📖 Guide** in the toolbar to open the in-app overlay.

### Quests Tab
- **501 quests** (Lv. 1–183) sourced from NaviKnight2765's spreadsheet
- Columns: Level, Questline, Name, Recommendation, Exp, Difficulty, Items, Monsters, Inventory slots, Rewards, Notes
- **Filter bar:** Open / Done / Skipped / All (default: Open)
- **Status tracking:** Radio buttons per quest — Open (○), Done (✓), or Skipped (⊗)
- **Live search** across all fields
- Click quest name → opens Flyffipedia detail page

### Questlines Tab
- **36 questlines** with start NPC, location, level range
- **Green progress bar:** quests completed (excludes skipped)
- **Orange bar:** inventory slots unlocked so far
- Click row → filters Quests tab to that questline

### Dailies Tab
- **Forsaken Tower** (Lv. 86–152) and **Kaillun** (Lv. 162–172)
- **Your Level** input: filters to quests at or below your level
- Columns: Level, Name, Exp, Monsters to kill, Penya

### Monsters Tab
- Quick reference grid for 53 monsters

### Export / Import Progress
- **📤 Export Progress** → saves quest data as JSON file (backup before updates)
- **📥 Import Progress** → restores from backup
- Your progress is stored in `~/.config/flyff-wrapper/` and survives AppImage updates

---

## 🔘 Macro Buttons

Macros fire key sequences with configurable delays. Each macro becomes a toolbar button.

**Default macros:**
- **Full Buff Acc1** — `F2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, F1` with 2 sec delay between keys
- **Full Buff Acc2** — same sequence for Acc2

### Setup
1. **Settings → Macros** — Label, Account (1–4), Keys (comma-separated), Delay (seconds)
2. `+ Add macro` / `✕` to manage
3. **💾 Save** — button appears immediately in toolbar

**Example:** Create a macro with keys `F2, 1, 2, 3` and delay `2` sec → Presses F2, waits 2 sec, presses 1, waits 2 sec, presses 2, etc.

Automation on the target account pauses during macro execution and resumes after.

---

## ⚙️ Settings Overview

Open with **⚙ Settings** in the toolbar.

| Tab | What it does |
|-----|-------------|
| **Automation** | Per-account buff/heal action lists (key + interval in seconds + enable) |
| **Controller** | Gamepad button mapping (0–15), auto-target radius |
| **Accounts** | Reset session per account (clear cookies / force re-login) |
| **Hotkeys** | Account switch, automation toggle, follow+board |
| **Macros** | Toolbar macro buttons (key sequences + delay in seconds) |
| **Auto-Heal** | HP/MP/FP monitoring — Bar or Pixel mode per bar, interval in seconds |

Click **💾 Save** to apply. Running automations restart immediately — no app restart needed.

---

## 📦 AppImage Updates

All user data is stored in `~/.config/flyff-wrapper/`:
- Automation config
- Gamepad config
- Macros
- Auto-Heal calibration
- Quest progress

**AppImage updates do NOT overwrite your settings.** Just replace the `.AppImage` file and re-run.

Use **Export Progress** in the Guide for an extra backup before updating.

---

## 🛠️ Development

```bash
git clone https://github.com/daanheskes/flyff-steamdeck.git
cd flyff-steamdeck
npm install
npm start              # dev mode (Electron + devtools)
npm run build          # builds dist/Flyff-SteamDeck.AppImage
```

Deploy to Steam Deck:
```bash
scp dist/Flyff-SteamDeck.AppImage deck@<deck-ip>:~/
# Or run the installer again to update
```

---

## 🏆 Credits

This project is a fork from the Github repository [AimWald-SDF](https://github.com/AimWald/aimwald-sdf). I'd like to thank AimWald for the initial project, as otherwise this project would not have existed either.

**Quest data** (501 quests, 36 questlines, difficulty ratings, recommendations, inventory slot tracking) sourced from the spreadsheet by **NaviKnight2765**:
- Reddit: [u/NaviKnight2765](https://www.reddit.com/user/NaviKnight2765/)
- Original post: [I made a spreadsheet with detailed info about all quests and drops](https://www.reddit.com/r/FlyffUniverse/comments/1k0n6mo/i_made_a_spreadsheet_with_detailed_info_about_all/)

**Auto-targeting spiral search** inspired by [Ariorh1337/flyff_bot](https://github.com/Ariorh1337/flyff_bot).

---

## ⚠️ Disclaimer

This project is an **independent, community-driven wrapper** for Flyff Universe and is **not affiliated with, endorsed by, or sponsored by Gala Lab Corp., Galanet, or any official Flyff developers**.

- **Flyff Universe** is a trademark of Gala Lab Corp.
- This wrapper is provided **as-is** for educational and personal use.
- **Use at your own risk.** The author is not responsible for any consequences of using this software, including account suspensions, bans, or violations of Flyff Universe's Terms of Service.
- The automation was already added since this project was forked from the AimWald-SDF project, ultimately it will be removed from this fork as the main goal for this project is to make Flyff Universe playable (and enjoyable) on the SteamDeck. For now, it's kept due to simply not having the time to remove it.

### Risk Levels by Feature

**Safe for casual use** (Quality-of-life only):
- Multiboxing (multiple accounts)
- Monster list
- Quest guide

**Medium to High Risk** (violates ToS):
- **Auto-Heal/MP/FP** — Automated input based on screen monitoring
- **Automation timers** — Timed buff/heal rotations (includes randomization to reduce detection)
- **Macros** — Rapid key sequences
- **Auto-Targeting** — Experimental cursor automation (unreliable, ban risk unknown)

**If you only want comfortable Steam Deck controls without automation, simply don't enable any automation features.** You can enjoy the wrapper safely with just gamepad mapping and the quest guide.

**The author assumes no liability for bans or ToS violations. Use automation features at your own discretion.**

**Support the official game:**  
If you enjoy Flyff Universe, consider supporting the developers by purchasing in-game items or subscribing to premium services at [universe.flyff.com](https://universe.flyff.com).

---

## 📜 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🐛 Issues & Feedback

Report bugs or request features at the [Issues](https://github.com/daanheskes/flyff-steamdeck/issues) page.
