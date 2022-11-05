import React from 'react'
import { MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import "./Primart_info_form.css"
import { Form, Input, Space,Select,Col,Row, Button } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;



function Primary_info_form() {
    
  return (
    <div>
    <Collapse defaultActiveKey={['1']} >
      <Panel header="Education Details" key="1" >
    <Form layout='vertical'>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Education Type"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Year Of Passing"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Percentage (%)"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="University Name"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Institute Name"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Specialization"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="State"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
            </Row>
    </Form> 
    </Panel>  
    </Collapse>   
  </div>
  )
}


export default Primary_info_form