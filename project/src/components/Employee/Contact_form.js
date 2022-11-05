import { Col, Collapse, Form, Input, Row, Select } from 'antd'
import React from 'react'
const { Panel } = Collapse;


function Contact_form() {
  return (
    <div>
         
        <Collapse defaultActiveKey={['1']} >
          <Panel header="Contact" key="1">
        <Form layout='vertical'>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Contact Type"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Contact Number"><Input /></Form.Item></Col >
                </Row>  
        </Form> 
        </Panel>
        </Collapse> 
    </div>
  )
}

export default Contact_form