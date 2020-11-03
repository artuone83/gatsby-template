import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';

import { toggleDarkMode } from '../state/app/actions';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ app, toggleDarkMode }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p onClick={() => toggleDarkMode(!app)}>Click me to change global state</p>
    {app ? (
      <p>
        Now go build something great.
        {' '}
        {app.toString()}
      </p>
    ) : (
      <p>
        {' '}
        darkMode state is
        {' '}
        {app.toString()}
      </p>
    )}
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {' '}
    <br />
    <Link to="/using-typescript/">Go to &quote;Using TypeScript&quote;</Link>
  </Layout>
);

const mapStateToProps = (state) => ({
  app: state.app.isDarkMode,
});

const mapDispatchToProps = {
  toggleDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
