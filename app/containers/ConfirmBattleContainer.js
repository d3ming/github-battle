var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelper');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        }
    },
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    componentDidMount: function() {
        var query = this.props.location.query;

        // Get data from github api
        githubHelper.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(function(players) {
                this.setState({
                    isLoading: false, 
                    playersInfo: [players[0], players[1]]
                });
            }.bind(this))
    },
    handleInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    render: function() {
        return (
            <ConfirmBattle 
                onInitiateBattle={this.handleInitiateBattle}
                isLoading={this.state.isLoading} 
                playersInfo={this.state.playersInfo} />
        );
    }
});

module.exports = ConfirmBattleContainer;
