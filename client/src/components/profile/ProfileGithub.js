import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {

  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username])

  return (
    <div>

    </div>
  )
};

const mapStateToProps = state => ({
  repos: state.profile.repos
})

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
