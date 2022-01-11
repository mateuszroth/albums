import { Card, PageHeader, Row, Col, Tooltip, Button, Spin, Alert } from "antd";
import Meta from "antd/lib/card/Meta";
import { useQuery } from "react-query";
import { Album, fetchAlbums } from "../../queries/albums";
import useFavorites from "../../common/hooks/useFavorites";
import { Link } from "react-router-dom";
import FavoriteButton from "../../common/components/FavoriteButton";
import EditAlbumButton from "../../common/components/EditAlbumButton";

export default function AlbumsList() {
  const { isLoading, isError, data, error } = useQuery("albums", fetchAlbums);
  const { addFavorite, deleteFavorite, isFavorite } = useFavorites();

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

  return (
    <>
      <PageHeader
        title="Albums"
        extra={[
          <Link key="1" to={"/add"}>
            <Button type="primary">Add album</Button>
          </Link>,
        ]}
      />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data &&
          data.slice(0, 10).map((album: Album) => (
            <Col xs={24} lg={6} key={album.id}>
              <Card
                style={{
                  margin: "10px 0",
                  background: isFavorite(album.id) ? "#ffffe0" : "none",
                }}
                cover={
                  <img
                    alt="example"
                    src={album.photos && album.photos[0].thumbnailUrl}
                  />
                }
              >
                <Link to={`/${album.id}`}>
                  <Meta title={album.title} description={`ID: ${album.id}`} />
                </Link>
                <div style={{ marginTop: 10 }}>
                  <FavoriteButton albumId={album.id} />
                  <EditAlbumButton albumId={album.id} />
                  <Link to={`/${album.id}`}>
                    <Button type="default" size="large">
                      Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
