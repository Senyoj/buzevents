import React from "react";
import {
  Input,
  Card,
  Space,
  Tag,
  Row,
  Col,
  Typography,
  DatePicker,
  Select,
} from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  TagOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const EventSearchPage: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[16, 24]}>
        {/* Search Header */}
        <Col span={24}>
          <Card>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Input.Search
                placeholder="Search for events..."
                size="large"
                prefix={<SearchOutlined />}
              />k
              <Row gutter={16}>
                <Col xs={24} sm={8}>
                  <DatePicker
                    style={{ width: "100%" }}
                    placeholder="Select date"
                    prefix={<CalendarOutlined />}
                  />
                </Col>
                <Col xs={24} sm={8}>
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Select location"
                    prefix={<EnvironmentOutlined />}
                  >
                    <Option value="new-york">New York</Option>
                    <Option value="london">London</Option>
                    <Option value="tokyo">Tokyo</Option>
                  </Select>
                </Col>
                <Col xs={24} sm={8}>
                  <Select
                    style={{ width: "100%" }}
                    placeholder="Event category"
                    prefix={<TagOutlined />}
                  >
                    <Option value="music">Music</Option>
                    <Option value="sports">Sports</Option>
                    <Option value="arts">Arts</Option>
                  </Select>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>

        {/* Search Results */}
        <Col span={24}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Card hoverable>
              <Row align="middle" justify="space-between">
                <Col>
                  <Title level={4}>Summer Music Festival</Title>
                  <Space size="middle">
                    <Text type="secondary">
                      <CalendarOutlined /> July 15, 2024
                    </Text>
                    <Text type="secondary">
                      <EnvironmentOutlined /> Central Park
                    </Text>
                  </Space>
                  <div style={{ marginTop: "8px" }}>
                    <Tag color="blue">Music</Tag>
                    <Tag color="green">Outdoor</Tag>
                  </div>
                </Col>
                <Col>
                  <img
                    src="/api/placeholder/100/100"
                    alt="Event"
                    style={{ borderRadius: "8px" }}
                  />
                </Col>
              </Row>
            </Card>

            <Card hoverable>
              <Row align="middle" justify="space-between">
                <Col>
                  <Title level={4}>Tech Conference 2024</Title>
                  <Space size="middle">
                    <Text type="secondary">
                      <CalendarOutlined /> August 20, 2024
                    </Text>
                    <Text type="secondary">
                      <EnvironmentOutlined /> Convention Center
                    </Text>
                  </Space>
                  <div style={{ marginTop: "8px" }}>
                    <Tag color="purple">Technology</Tag>
                    <Tag color="orange">Conference</Tag>
                  </div>
                </Col>
                <Col>
                  <img
                    src="/api/placeholder/100/100"
                    alt="Event"
                    style={{ borderRadius: "8px" }}
                  />
                </Col>
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default EventSearchPage;
