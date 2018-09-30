import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'page-apptour swiper-pagination-bullet': {
    'backgroundColor': '#fff'
  },
  'page-apptour no-padding-top scroll-content': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'page-apptour skip-button': {
    'textTransform': 'none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'fontWeight': 'bold'
  },
  'page-apptour floating-buttons': {
    'zIndex': '1',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'transition': 'all .4s linear'
  },
  'page-apptour floating-buttons button': {
    'color': 'white',
    'minHeight': [{ 'unit': 'vh', 'value': 7 }],
    'textTransform': 'none',
    'fontSize': [{ 'unit': 'em', 'value': 1.4 }],
    'fontWeight': 'bold',
    'background': 'rgba(49, 161, 216, 0.67)'
  },
  'page-apptour slide-background': {
    'backgroundSize': 'cover !important',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'borderColor': 'transparent'
  },
  'page-apptour toolbar-background': {
    'borderColor': 'transparent'
  },
  'page-apptour slide-zoom': {
    'background': 'linear-gradient(transparent, rgba(0, 0, 0, 0.4)) !important',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'page-apptour text-wrapper': {
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'height': [{ 'unit': 'vh', 'value': 100 }]
  },
  'page-apptour slide-text': {
    'position': 'relative',
    'textAlign': 'center',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translateY(-50%)'
  },
  'page-apptour slide-title': {
    'color': 'white',
    'fontWeight': 'bold'
  },
  'page-apptour slide-image': {
    'maxHeight': [{ 'unit': '%V', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 18 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-apptour last-slide': {
    'backgroundImage': 'url("img/welcome-4.jpg")'
  },
  'page-apptour b': {
    'fontWeight': '500'
  },
  'page-apptour p': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#FFF'
  },
  'page-apptour p b': {
    'color': '#000000'
  }
});
