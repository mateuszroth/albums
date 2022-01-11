export interface Album {
  userId: number;
  id: number;
  title: string;
  photos?: Photo[];
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function fetchAlbums() {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((res) => res.json());
  const photos = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  ).then((res) => res.json());
  return albums.map((album: Album) => {
    album.photos = photos.filter((photo: Photo) => photo.albumId === album.id);
    return album;
  });
}
