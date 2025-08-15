import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

class ErrorBoundary extends React.Component {
  constructor(props){super(props); this.state={hasError:false, error:null};}
  static getDerivedStateFromError(error){return {hasError:true, error};}
  componentDidCatch(error, info){console.error('App crashed:', error, info);} 
  render(){ if(this.state.hasError){ return React.createElement('pre', {style:{whiteSpace:'pre-wrap', padding:16}}, String(this.state.error)); } return this.props.children; }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
