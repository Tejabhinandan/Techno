import { Col, Collapse, Form, Input, Row, Select } from 'antd'
import React from 'react'
const { Panel } = Collapse;


function Technical_skills_form() {
  return (
    <div>
         <Collapse defaultActiveKey={['1']} >
      <Panel header="Skills" key="1" >
    <Form layout='vertical'>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Skill Type"><Input /></Form.Item></Col >
              <Col span={8} offset={6}><Form.Item label="Skill Rateing"><Input /></Form.Item></Col >
            </Row>
            <Row>
              <Col span={8} push={2} ><Form.Item label="Year Of Experience(over skill)"><Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
            </Row>
    </Form>      
    </Panel>
    </Collapse>
    </div>
  )
}

export default Technical_skills_form