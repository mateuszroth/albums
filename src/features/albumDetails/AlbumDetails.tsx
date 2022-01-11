import { Alert, Button, Col, Image, PageHeader, Row, Spin } from "antd";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import EditAlbumButton from "../../common/components/EditAlbumButton";
import FavoriteButton from "../../common/components/FavoriteButton";
import { Album, fetchAlbums, Photo } from "../../common/queries/albums";

export default function AlbumsDetails() {
  const { isLoading, isError, data, error } = useQuery("albums", fetchAlbums);
  let params = useParams();

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError) {
    return (
      <Alert
        message="Error with connection. Please ensure you have Internet access."
        type="warning"
      />
    );
  }

  const album = data.find((album: Album) => album.id === Number(params.id));

  return (
    <>
      <PageHeader
        title={album.title}
        extra={[
          <EditAlbumButton key="edit" albumId={album.id} />,
          <FavoriteButton key="fav" albumId={album.id} />,
        ]}
      />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {album.photos.slice(0, 10).map((photo: Photo) => (
          <Col xs={24} lg={6} key={photo.id}>
            <Image src={photo.url} alt={photo.title} />
          </Col>
        ))}
      </Row>
    </>
  );
}
