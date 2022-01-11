import { Col, PageHeader, Row } from "antd";
import AlbumForm from "../../common/components/AlbumForm";

export default function AlbumAdd() {
  return (
    <>
      <PageHeader title="Add album" />
      <Row>
        <Col span={8}>
          <AlbumForm />
        </Col>
      </Row>
    </>
  );
}
