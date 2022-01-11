import { Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

interface EditAlbumButtonProps {
  albumId: number;
}

export default function EditAlbumButton({ albumId }: EditAlbumButtonProps) {
  return (
    <Tooltip title="Edit">
      <Link to={`/${albumId}/edit`}>
        <Button
          type="default"
          shape="circle"
          icon={<EditOutlined />}
          size="large"
          style={{ margin: "0 5px" }}
        />
      </Link>
    </Tooltip>
  );
}
