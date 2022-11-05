import { Col, Form, Input, Row, Select } from 'antd'
import React from 'react'
import "./Primart_info_form.css"


function Bank_details_form() {
  return (
    <div>
        <div style={{width:"70%",marginLeft:150}}>
 <Form layout='vertical'>
                <Row>
                  <Col span={8} push={2} ><Form.Item id='txt' label="Account No."><Input /></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="Bank Name"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Account Type"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                  <Col span={8} offset={6}><Form.Item label="IFSC Code"><Input /></Form.Item></Col >
                </Row>
                <Row>
                  <Col span={8} push={2} ><Form.Item label="Branch">  <Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                  <Col span={8} offset={6} ><Form.Item label="State">  <Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
                </Row>
        </Form>      



    </div>
    </div>
  )
}

export default Bank_details_form