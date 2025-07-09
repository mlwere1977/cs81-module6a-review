# REFLECTION.md

**Project:** Mukwaya Lwere's Playlist Manager  
**Class:** CS 81 JavaScript  
**Assignment:** Module 6 – Playlist Object  
**Date:** 07/09/2025

---

## What was the hardest part to understand?

- **Understanding how the `this` keyword functions inside each method was the most difficult aspect.**
 - The fact that `this` always refers to the particular playlist object being used was initially unclear, particularly when several methods interact with the same properties. 
 - Reading and commenting on each line helped me see how `this` ties the playlist’s data (like `songs` and `currentSong`) directly to the methods, making the object feel like a real, self-contained music player.

---

## How does this code use `this` to tie data and behavior together?

- The code makes use of `this` to link the behaviors (like adding, removing, skipping, or listing songs) with the playlist's data (like the playlist name, the list of songs, and the current song). 
- To access or modify the properties of the particular playlist instance, each method makes use of `this`. 
- This implies that each playlist object made with the constructor can use the same set of methods to independently manage its own songs and state.

---

## What would you do differently if you wrote this object from scratch?

- I would add more user-friendly features, like the option to shuffle songs or show the song that is currently playing at any time, if I were creating this object from scratch.
- Shorten and broaden the method names so that anyone, not just Mukwaya, can use them.
- When attempting to skip a song when the playlist is empty, for example, add error handling.
- For a more contemporary and readable syntax, think about utilizing ES6 classes.
- To make the playlist more flexible and realistic, allow song objects (with title, artist, and duration) rather than just song titles.

---

**End of Reflection**
