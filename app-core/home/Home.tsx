import * as React from 'react';
import { Component } from 'react';

const dataSource = [{
  'title': 'Malta to Amsterdam',
  'status': 'On time',
  'time': '08:45',
}, {
  'title': 'Malta to London',
  'status': 'Delayed',
  'time': '09:45',
}, {
  'title': 'Malta to Poznan',
  'status': 'On time',
  'time': '10:00',
}, {
  'title': 'Malta to London',
  'status': 'On time',
  'time': '11:45',
}, {
  'title': 'Malta to Rome',
  'status': 'On time',
  'time': '12:05',
}, {
  'title': 'Malta to Paris',
  'status': 'Delayed',
  'time': '12:35',
}];

interface IItem {
  title: string;
  status: string;
  time: string;
}

export class Home extends Component<any, any> {
  render() {
    return (
      <div>
        <h1>DemoPage</h1>
        <ul>
          {dataSource.map((item: IItem, idx: number) => (
            <li key={idx}>
              <span>{item.title}</span>
              <span>{item.status}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
