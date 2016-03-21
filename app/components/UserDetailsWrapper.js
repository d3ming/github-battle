var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(props) {
    return(
            <div className='col-sm-6'>
                <p className='lead'>{props.label}</p>
                {props.children}
            </div>
    )
}

UserDetailsWrapper.propTypes = {
    label: PropTypes.string.isRequired,
    info: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        blog: PropTypes.string,
        company: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        location: PropTypes.string,
        login: PropTypes.string.isRequired,
        name: PropTypes.string,
        public_repos: PropTypes.number.isRequired
    })
}

module.exports = UserDetailsWrapper;
