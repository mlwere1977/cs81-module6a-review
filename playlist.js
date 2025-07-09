// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 6 Assignment 6A: Code Review
// Date: 07/09/2025

/*
  Mukwaya Lwere's Playlist Manager
  --------------------------------
  In order for Mukwaya to create a music playlist, add songs, play songs, skip to the next song, and list all of the songs in the playlist, this code defines a Playlist object.
  For clarity, human-like comments are provided for each function and property.
*/

// A new playlist object is created for Mukwaya by the Playlist constructor.
// It creates a placeholder for the current song, an empty array for songs, and the playlist's name.
function MukwayaPlaylist(playlistName) {
  this.name = playlistName;      // Stores the name of Mukwaya's playlist (e.g., "Mukwaya's Chill Mix")
  this.songs = [];               // Initializes an empty array to hold all the song titles
  this.currentSong = null;       // Keeps track of which song is currently playing; starts as null
}

// Updates Mukwaya's playlist with a new song. 
// The song title is appended to the end of the songs array using this method.
MukwayaPlaylist.prototype.addSongToMukwayaMix = function(songTitle) {
  this.songs.push(songTitle);    // Adds the songTitle to the songs array
  // 'this' refers to the specific playlist object Mukwaya is working with
};

// Starts playing the first song on Mukwaya's playlist. 
// If there are songs, it announces and sets the first one as the one that is playing right now.
MukwayaPlaylist.prototype.playFirstSongForMukwaya = function() {
  if (this.songs.length > 0) {   // Checks if there is at least one song in the playlist
    this.currentSong = this.songs[0];  // Sets the first song as the current song
    console.log("Now playing:", this.currentSong); // Prints out the song that's playing
  }
  // 'this' here refers to Mukwaya's playlist object and its properties
};

// Goes to the next song on the playlist, skipping the current one.
// It plays the next song and removes the first if there are more; if not, it alerts Mukwaya.
MukwayaPlaylist.prototype.skipMukwayaSong = function() {
  if (this.songs.length > 1) {   // Checks if there's more than one song to skip to
    this.songs.shift();          // Removes the first song from the playlist
    this.currentSong = this.songs[0]; // Sets the new first song as currently playing
    console.log("Skipped! Now playing:", this.currentSong); // Announces the new song
  } else {
    console.log("No more songs to skip."); // Lets Mukwaya know the playlist is at the end
  }
  // 'this' refers to the playlist instance Mukwaya is using
};

// Provides a list of every song that is currently on Mukwaya's playlist. 
// The name of the playlist and a list of every song separated by commas are printed out.
MukwayaPlaylist.prototype.listMukwayaSongs = function() {
  console.log("Playlist:", this.name); // Shows the name of the playlist
  console.log("Songs:", this.songs.join(", ")); // Lists all songs, separated by commas
  // 'this' refers to Mukwaya's playlist object and its properties
};

// --- Improvement Suggestion ---
// One improvemnt is to include a way to remove a particular song based on its title to make the playlist more interactive.

/*
  Mukwaya now has the ability to remove songs from the playlist by title.
  If the song title is found, it is removed using this method.
*/
MukwayaPlaylist.prototype.removeSongFromMukwayaMix = function(songTitle) {
  const songIndex = this.songs.indexOf(songTitle); // Finds the index of the song in the array
  if (songIndex !== -1) {                          // Checks if the song exists in the playlist
    this.songs.splice(songIndex, 1);               // Removes the song from the array
    console.log(`Removed "${songTitle}" from Mukwaya's playlist.`);
    // If the removed song was currently playing, update currentSong
    if (this.currentSong === songTitle) {
      this.currentSong = this.songs[0] || null;
      if (this.currentSong) {
        console.log("Now playing:", this.currentSong);
      } else {
        console.log("No songs left in the playlist.");
      }
    }
  } else {
    console.log(`"${songTitle}" is not in Mukwaya's playlist.`);
  }
  // 'this' refers to Mukwaya's playlist object
};

// --- Example usage: Creating and using Mukwaya's playlist ---

let mukwayaChillMix = new MukwayaPlaylist("Mukwaya's Chill Mix"); // Create a new playlist for Mukwaya
mukwayaChillMix.addSongToMukwayaMix("Lofi Study");                // Add a relaxing study song
mukwayaChillMix.addSongToMukwayaMix("Chillhop Beats");            // Add a chillhop track
mukwayaChillMix.addSongToMukwayaMix("Evening Jazz");              // Add some evening jazz vibes
mukwayaChillMix.playFirstSongForMukwaya();                        // Start playing the first song
mukwayaChillMix.skipMukwayaSong();                                // Skip to the next song
mukwayaChillMix.listMukwayaSongs();                               // List all songs in the playlist
mukwayaChillMix.removeSongFromMukwayaMix("Chillhop Beats");       // Remove a song by title

// End of Mukwaya Lwere's Playlist Manager
