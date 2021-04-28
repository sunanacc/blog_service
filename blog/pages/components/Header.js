import React from 'react'
import styles from '../../styles/components/header.module.scss'
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
  DownOutlined,
  SearchOutlined
} from '@ant-design/icons';
import {Row,Col, Menu, Dropdown, Button, Input, Affix} from 'antd'

const menu = (
  <Menu className={styles.menu} mode="horizontal">
    <Menu.Item className={styles.item} key="home">
      <HomeOutlined />
        首页
    </Menu.Item>
    <Menu.Item className={styles.item} key="video">
      <YoutubeOutlined />
        视频
    </Menu.Item>
    <Menu.Item className={styles.item} key="life">
      <SmileOutlined />
        生活
    </Menu.Item>
  </Menu>
);
const onSearch = value => console.log(value);
const search = (
  <Input className={styles.search} placeholder="请输入" onSearch={onSearch} style={{ width: 160 }} />
);
const Header = () => (
  
  <div className={styles.header}>
    <Row className={styles.row} type="flex" justify="center">
        <Col xs={18} sm={18} md={14} lg={11} xl={11}>
            <span className={styles.logo}>sunanacc</span>
            <span className={styles.txt}>起风了，唯有努力生存</span>
        </Col>
        <Col xs={0} sm={0} md={10} lg={8} xl={8}>
          {menu}
        </Col>
        <Col  xs={6} sm={6} md={0} lg={0} xl={0}>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button shape="circle" className={styles.button}><DownOutlined /></Button>
          </Dropdown>
          <Dropdown overlay={search} trigger={['click']}>
            <Button shape="circle" className={styles.button}><SearchOutlined /></Button>
          </Dropdown>
        </Col>
    </Row>
 </div>
)

export default Header