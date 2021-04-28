import React from 'react'
import styles from '../../styles/components/header.module.scss'
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined
} from '@ant-design/icons';

import {Row,Col, Menu, Icon} from 'antd'
const Header = () => (
  <div className={styles.header}>
    <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className={styles.logo}>sunanacc</span>
            <span className={styles.txt}>起风了，唯有努力生存</span>
        </Col>

        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
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
        </Col>
    </Row>
 </div>
)

export default Header