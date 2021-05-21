import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Affix } from 'antd'
import {
  CalendarFilled,
  FolderFilled,
  FireFilled,
} from '@ant-design/icons';
import Header from './components/Header'
import styles from '../styles/pages/index.module.scss'

const Home = (list) => {
  const [ mylist , setMylist ] = useState(
    [
      {title:'测试',context:'测试测试'},
    ]
  )

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Affix offsetTop={0}><Header /></Affix>
        
      <div className={styles.comm}>
        <Row className={styles.row} type="flex" justify="center">
          <Col className={styles.box_l} xs={24} sm={24} md={17} lg={18} xl={18}>
          <List
            header = {<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item =>(
              <List.Item>
                <div className={styles.title}>
                  {item.title}
                </div>
                <div className={styles.context}>
                  {/* <span><CalendarFilled /> {item.add_time} </span>
                  <span><FolderFilled /> {item.type_name} </span>
                  <span><FireFilled /> {item.view_count} </span> */}
                  <span><CalendarFilled /> fasdfsdafa </span>
                  <span><FolderFilled /> fdsagfdasgfsg </span>
                  <span><FireFilled /> fasdfasf </span>
                </div>
                <div className={styles.icon}
                  // dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                  
                >{item.context}</div>
              </List.Item>
            )}
          />
        </Col>

          <Col className={styles.box_r} xs={0} sm={0} md={7} lg={6} xl={6}>
            <div>123</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Home