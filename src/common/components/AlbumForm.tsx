import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";

interface AlbumFormProps {
  defaultName?: string;
  albumId?: number;
}

export default function AlbumForm({ defaultName, albumId }: AlbumFormProps) {
  const navigate = useNavigate();

  return (
    <Form
      name="album"
      onFinish={() => {
        notification.success({
          message: "Pomyślnie zapisano!",
        });
        if (albumId) {
          navigate(`/${albumId}`);
        } else {
          navigate("/");
        }
      }}
      initialValues={{
        title: defaultName,
      }}
    >
      <Form.Item
        name={"title"}
        label="Title"
        rules={[
          {
            type: "string",
            required: true,
            pattern: new RegExp(/^[a-zA-Z\s]*$/),
            message: "${label} is not valid! Use only letters and spaces",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

AlbumForm.defaultProps = {
  defaultName: "",
  albumId: undefined,
};
