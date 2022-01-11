import { Button, Tooltip } from "antd";
import { StarOutlined } from "@ant-design/icons";
import useFavorites from "../hooks/useFavorites";

interface FavoriteButtonProps {
  albumId: number;
}

export default function FavoriteButton({ albumId }: FavoriteButtonProps) {
  const { addFavorite, deleteFavorite, isFavorite } = useFavorites();
  return (
    <>
      {isFavorite(albumId) ? (
        <Tooltip title="Remove from favorites">
          <Button
            type="primary"
            shape="circle"
            icon={<StarOutlined />}
            size="large"
            onClick={() => deleteFavorite(albumId)}
          />
        </Tooltip>
      ) : (
        <Tooltip title="Add to favorites">
          <Button
            type="default"
            shape="circle"
            icon={<StarOutlined />}
            size="large"
            onClick={() => addFavorite(albumId)}
          />
        </Tooltip>
      )}
    </>
  );
}
