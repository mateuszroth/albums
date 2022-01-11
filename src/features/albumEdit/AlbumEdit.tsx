import { Alert, Col, PageHeader, Row, Spin } from "antd";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AlbumForm from "../../common/components/AlbumForm";
import { Album, fetchAlbums } from "../../queries/albums";

export default function AlbumEdit() {
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
      <PageHeader title="Edit album" />
      <Row>
        <Col span={8}>
          <AlbumForm defaultName={album.title} albumId={album.id} />
        </Col>
      </Row>
    </>
  );
}
