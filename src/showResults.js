import { songs } from './data.js';
import {
    getAllArtists,
    getSongsFromArtist,
    orderAlphabetically,
    orderByYear,
    songsByGenre,
    minutsToSeconds,
    getLongestSong
} from './songs.js';

console.log('\n🎵 JS Songs - Results in Terminal\n');

console.log('1. All artists (first 10):');
console.table(getAllArtists(songs).slice(0, 10));

console.log('2. Songs from Amy Winehouse:');
console.table(getSongsFromArtist(songs, 'Amy Winehouse'));

console.log('3. Alphabetical order by title (top 10):');
console.table(orderAlphabetically(songs));

console.log('4. Songs ordered by year (first 5):');
console.table(orderByYear(songs).slice(0, 5));

console.log('5. Jazz songs (first 5):');
console.table(songsByGenre(songs, 'Jazz').slice(0, 5));

console.log('6. Songs with duration in seconds (first 5):');
console.table(minutsToSeconds(songs).slice(0, 5));

console.log('7. Longest song(s):');
console.table(getLongestSong(songs));
