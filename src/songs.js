// Exercise 1: Get the array of all artists.
function getAllArtists(array) {
    return array.map((song) => song.artist);
}

// Exercise 2: Get the songs of a certain artist.
function getSongsFromArtist(array, artist) {
    return array.filter((song) => song.artist === artist);
}

// Exercise 3: Alphabetic order by title.
function orderAlphabetically(array) {
    return [...array]
        .map((song) => song.title)
        .sort((firstTitle, secondTitle) => firstTitle.localeCompare(secondTitle))
        .slice(0, 10);
}

// Exercise 4: Order by year, ascending.
function orderByYear(array) {
    return [...array].sort((firstSong, secondSong) => {
        if (firstSong.year !== secondSong.year) {
            return firstSong.year - secondSong.year;
        }

        return (firstSong.title || '').localeCompare(secondSong.title || '');
    });
}

// Exercise 5: Filter songs by genre.
function songsByGenre(array, genre) {
    return array.filter((song) => song.genre.includes(genre));
}

function parseDuration(duration) {
    const match = duration.match(/(\d+)\s*min\s*(\d+)\s*sec/);

    if (!match) {
        return 0;
    }

    const minutes = Number(match[1]);
    const seconds = Number(match[2]);

    return (minutes * 60) + seconds;
}

// Exercise 6: Modify the duration of songs to seconds.
function minutsToSeconds(array) {
    return array.map((song) => ({
        ...song,
        duration: parseDuration(song.duration || '')
    }));
}

// Exercise 7: Get the longest song.
function getLongestSong(array) {
    const songsWithSeconds = minutsToSeconds(array);
    const longestDuration = songsWithSeconds.reduce((maxDuration, song) => {
        return Math.max(maxDuration, song.duration);
    }, 0);

    return songsWithSeconds.filter((song) => song.duration === longestDuration);
}

// Exercise 8: Get the shortest song.
// Write the getShortestSong() function.

export {
    getAllArtists,
    getSongsFromArtist,
    orderAlphabetically,
    orderByYear,
    songsByGenre,
    minutsToSeconds,
    getLongestSong
};