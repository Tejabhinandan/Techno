import React from 'react'
import "./Primart_info_form.css"
import { Form, Input, Space,Select,Col,Row, Button, Collapse } from 'antd';
const { Panel } = Collapse;




function Address_details_form() {
  return (
    <div>
            <Collapse defaultActiveKey={['1']} >
    <Panel header="Address Details" >
  <Form layout='vertical'>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Address Type"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Door No"><Input /></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Street"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Locality"><Input /></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="City"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="State"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
          </Row>
          <Row>
            <Col span={8} push={2} ><Form.Item label="Pin Code"><Input /></Form.Item></Col >
            <Col span={8} offset={6}><Form.Item label="Land Mark"><Input /></Form.Item></Col >
          </Row>
  </Form>      
  </Panel>
  </Collapse>
    </div>
  )
}

export default Address_details_form