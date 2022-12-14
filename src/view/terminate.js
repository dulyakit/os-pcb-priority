import React from 'react'
import { Card } from 'antd';
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux'

const Terminate = () => {
  const clock = useSelector((state) => state.clock)
  const processList = useSelector((state) => state.processList)
  const terminateList = useSelector((state) => state.processTerminateList)
  const usbRunning = useSelector((state) => state.usbRunning)
  const averageWaitting = useSelector((state) => state.averageWaitting)
  const averageTurnaround = useSelector((state) => state.averageTurnaround)
  const processRunning = useSelector((state) => state.processRunning)
  const starvationTime = useSelector((state) => state.starvationTime)

  return (
    <div >
      <div className="col-md-12">
        <Card>
          <div className="row">
            <div className="col-md-9 mb-3">
              <Card type="inner" title={
                <div className='row'>
                  <span style={{ fontSize: '18px' }}>Terminate</span>
                </div>
              }
                style={{ height: '350px', overflow: 'scroll', overflowX: 'scroll' }}>
                <Table hover className='text-nowrap'>
                  <thead align="left">
                    <tr>
                      <th style={{ width: '15%' }}>Process Name</th>
                      <th style={{ width: '10%' }}>Arrival Time</th>
                      <th style={{ width: '10%' }}>Priority</th>
                      <th style={{ width: '10%' }}>Burst Time</th>
                      <th style={{ width: '10%' }}>Waitting Time</th>
                      <th style={{ width: '13%' }}>Turn around Time</th>
                      <th style={{ width: '13%' }}>Status Process</th>
                    </tr>
                  </thead>
                  <tbody align="left">
                    {terminateList.map((items, idx) => (
                      <tr key={idx}>
                        <td>{items.name}</td>
                        <td>{items.arrivalTime}</td>
                        <td>{items.priority}</td>
                        <td>{items.burstTime}</td>
                        <td>{items.waittingTime}</td>
                        <td>{items.turnAroundTime}</td>
                        <td style={{ backgroundColor: 'pink' }}>Terminate</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </div>
            <div className="col-md-3">
              <Card
                type="inner"
                title={<span style={{ fontSize: '18px' }}>Controller</span>}
                style={{height:'350px'}}
              >
                <div align="left">
                  <div>Clock : {clock}</div>
                  <div>CPU Process : {processList.map((e) => (e.id === processRunning ? e.name : ''))}</div>
                  <div>I/O Process : {usbRunning}</div>
                  <div>AVG Waitting : {averageWaitting > 0 ? averageWaitting.toFixed(2) : '0.00'}</div>
                  <div>AVG Turnaround : {averageTurnaround > 0 ? averageTurnaround.toFixed(2) : '0.00'}</div>
                  <div>Starvation : {starvationTime} second</div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Terminate