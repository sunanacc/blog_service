import React from 'react'
import Head from 'next/head'
import { Row, Col, Button } from 'antd'
import Header from './components/Header'
import styles from '../styles/pages/index.module.scss'


const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <div className={styles.comm}>
      <Row className={styles.row} type="flex" justify="center">
        <Col className={styles.box} xs={24} sm={24} md={17} lg={18} xl={18}>
          左侧
        </Col>

        <Col className={styles.box} xs={0} sm={0} md={7} lg={6} xl={6}>
          右侧
        </Col>
      </Row>
    </div>

  </>
)

export default Home