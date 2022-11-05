import React, { useState } from 'react'
import { Button, Input, Layout,Modal,Popover,Select,Table} from "antd";
import "./MentorEmpList.css"
const { Content } = Layout;

function MentorEmpList() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            no: `1`,
            batch_id: "john@gmail.com",
            address: "John Address",
          },
     
    ]);

     // popover content
     const content = (
      <div>
        <table>
          <tr>
            <th>Mock 1</th>
            <th id='Mpo1' className="ps-5">Excellent</th>
          </tr>
          <tr>
            <th>Mock 2</th>
            <th id='Mpo2' className="ps-5">Good</th>
          </tr>
          <tr>
            <th>Mock 3</th>
            <th id='Mpo3' className="ps-5">Above average</th>
          </tr>
          <tr>
            <th>Mock 4</th>
            <th id='Mpo4' className="ps-5">Average</th>
          </tr>
          <tr>
            <th>Mock 5</th>
            <th id='Mpo5' className="ps-5">Below average</th>
          </tr>
        </table>
        </div>)

    const columns = [
      {
        key: "1",
        title: "No.",
        dataIndex: "no",
      },
      {
        key: "2",
        title: "Employee ID",
        dataIndex: "employeeid",
      },
      {
        key: "3",
        title: "Employee Name",
        dataIndex: "employee_name",
      },
      {
        key: "4",
        title: "Mocks Taken",
        dataIndex: "mock_taken",
      },
      {
        key: "5",
        title: "Skills",
        dataIndex: "skills",
      },
      {
        key: "6",
        title: "Mock Rating",
        render:()=>{
          return(
              <>
      <Popover content={content} placement="bottom" className="bg-white border-0">
               <i
                 style={{ crouser:"pointer", fontSize: "20px", color: "#C9A805" }}
                 className="fa-solid fa-triangle-exclamation"
               ></i>
           </Popover>
              
              </>
          )
        }
      },
      {
        key: "7",
        title: "Attendance",
        dataIndex: "attendance",
      },
      {
        key: "8",
        title: "Status",
        render: (record) => {
          return (
            <>
             <i onClick={() => {
                  onEditStudent(record);
                }} className="fa-solid fa-pencil"/>
              <i onClick={() => {
                  onDeleteStudent(record);
                }}
                style={{marginLeft: 15 }} className="fa-solid fa-trash"></i>
            </>
          );
        },
        
      },
    ];
  
    const onAddStudent = () => {
      const randomNumber = parseInt(Math.random() * 1000);
      const newStudent = {
        no:``,
        id: randomNumber,
        batch_id: "Name " + randomNumber,
        batch_name: randomNumber + "@gmail.com",
        address: "Address " + randomNumber,
      };
      setDataSource((pre) => {
        return [...pre, newStudent];
      });
    };
    const onDeleteStudent = (record) => {
      Modal.confirm({
        title: "Are you sure, you want to delete this record?",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
          setDataSource((pre) => {
            return pre.filter((student) => student.id !== record.id);
          });
        },
      });
    };
    const onEditStudent = (record) => {
      setIsEditing(true);
      setEditingStudent({ ...record });
    };
    const resetEditing = () => {
      setIsEditing(false);
      setEditingStudent(null);
    };
      // ADDING
      const [modal1Visible, setModal1Visible] = useState(false);
      // dropDown
      const techno=["HTML","CSS","Java Script","React JS","JAVA+Spring Boot","Node & Express JS"]
    
  return (
    <div>
    <Layout style={{
        marginLeft:"75px"
       }}>
              <Layout
                style={{
                  padding: "0 24px 24px"
                }}
              >
                
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    marginTop:"-320px"
                  }}
                >
                    <div className='MELmentorl'>
                        <p className='MELpar'>Mentors List</p>
                        <p className='MELpar1'>(Batch ID)</p>
                        <Input className='MELsearc' size='medium' placeholder="Search" prefix={<img height="13px" src='./Page_2/Xnix-Line-Search 5@2x.png' alt='o'/>} />

                        <Button className='MELmentornew'  onClick={() => setModal1Visible(true)}>
            +New Mentor
          </Button>
                    </div>
          <Table columns={columns} dataSource={dataSource} rowSelection={true}></Table>
            <Modal
              title="Edit Student"
              visible={isEditing}
              okText="Save"
              onCancel={() => {
                resetEditing();
              }}
              onOk={() => {
                setDataSource((pre) => {
                  return pre.map((student) => {
                    if (student.id === editingStudent.id) {
                      return editingStudent;
                    } else {
                      return student;
                    }
                  });
                });
                resetEditing();
              }}
            >
              <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
              <Input
                value={editingStudent?.name}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, name: e.target.value };
                  });
                }}
              />
              <p style={{color:"#707070",margin:"5px"}}>Employee ID</p>
              <Input
                value={editingStudent?.email}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, email: e.target.value };
                  });
                }}
              />
              <p style={{color:"#707070",margin:"5px"}}>E-mail ID</p>
              <Input
                value={editingStudent?.address}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, address: e.target.value };
                  });
                }}
              />
              <p style={{color:"#707070",margin:"5px"}}>technoligies</p>
              <Input
                value={editingStudent?.address}
                onChange={(e) => {
                  setEditingStudent((pre) => {
                    return { ...pre, address: e.target.value };
                  });
                }}
              />
            </Modal>
                </Content>
              </Layout>
            </Layout>
    
             {/* adding */}
            
          <Modal
          
          title="Add new batch"
          visible={modal1Visible}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
        >
          <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
         <Input size="large" placeholder=""/>
         <p style={{color:"#707070",margin:"5px"}}>Employee ID</p>
         <Input size="large" placeholder=""/>
         <p style={{color:"#707070",margin:"5px"}}>E-mail ID</p>
         <Input size="large" placeholder=""/>
         <p style={{color:"#707070",margin:"5px"}}>technoligies</p>
          <Select mode='multiple' style={{width:"100%",}} placeholder="">{techno.map((techno,idx)=>{
            return <Select.Option key={idx} value={techno}><button className='Mdrop'>{techno}</button></Select.Option>
          })}</Select>
        </Modal>
        </div>
    
  )
}

export default MentorEmpList