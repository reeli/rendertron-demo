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

const listStyles = {
  margin: '0 auto',
  padding: 0,
  maxWidth: '72em',
};

const listItemStyles = {
  padding: '1rem',
  margin: '0.5rem auto',
  background: '#fff',
  width: '100%',
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  listStyle: 'none',
};

const listItemTitleStyles = {
  color: 'rgba(0,0,0,0.7)',
};

const layoutStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
  color: 'rgba(0, 0, 0, 0.7)',
} as any;

export class Home extends Component<any, any> {
  render() {
    return (
      <ul style={listStyles}>
        {dataSource.map((item: IItem, idx: number) => (
          <li key={idx} style={listItemStyles}>
            <div style={listItemTitleStyles}>
              <b>{item.title}</b>
            </div>
            <div style={layoutStyles}>
              <span>{item.time}</span>
              <span>{item.status}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
