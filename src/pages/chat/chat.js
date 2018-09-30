import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'ion-content scroll-content': {
    'backgroundColor': '#f5f5f5'
  },
  'ion-footer': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.11)' }],
    'backgroundColor': '#fff',
    'height': [{ 'unit': 'px', 'value': 255 }]
  },
  'line-breaker': {
    'whiteSpace': 'pre-line'
  },
  'input-wrap': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'display': 'flex'
  },
  'input-wrap textarea': {
    'flex': '1',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#387ef5' }],
    'borderStyle': 'solid'
  },
  'message-wrap': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'message-wrap message': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }]
  },
  'message-wrap message user-img': {
    'position': 'absolute',
    'borderRadius': '45px',
    'width': [{ 'unit': 'px', 'value': 45 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.36)' }]
  },
  'message-wrap message msg-detail': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'inline-block'
  },
  'message-wrap message msg-detail p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'message-wrap message msg-detail msg-info p': {
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'color': '#888'
  },
  'message-wrap message msg-detail msg-content': {
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'color': '#fff',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'message-wrap message msg-detail msg-content spantriangle': {
    'backgroundColor': '#fff',
    'borderRadius': '2px',
    'height': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': 'px', 'value': 8 }],
    'top': [{ 'unit': 'px', 'value': 12 }],
    'display': 'block',
    'borderStyle': 'solid',
    'borderColor': '#ddd',
    'borderWidth': '1px',
    'WebkitTransform': 'rotate(45deg)',
    'transform': 'rotate(45deg)',
    'position': 'absolute'
  },
  'message-wrap messageleft msg-content': {
    'backgroundColor': '#fff',
    'float': 'left'
  },
  'message-wrap messageleft msg-detail': {
    'paddingLeft': [{ 'unit': 'px', 'value': 60 }]
  },
  'message-wrap messageleft user-img': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'message-wrap messageleft msg-detail msg-content': {
    'color': '#343434'
  },
  'message-wrap messageleft msg-detail msg-content spantriangle': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -5 }]
  },
  'message-wrap messageright msg-detail': {
    'paddingRight': [{ 'unit': 'px', 'value': 60 }]
  },
  'message-wrap messageright msg-detail msg-info': {
    'textAlign': 'right'
  },
  'message-wrap messageright user-img': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'message-wrap messageright ion-spinner': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 50 }]
  },
  'message-wrap messageright msg-detail msg-content': {
    'backgroundColor': '#387ef5',
    'float': 'right'
  },
  'message-wrap messageright msg-detail msg-content spantriangle': {
    'backgroundColor': '#387ef5',
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': -5 }]
  }
});
