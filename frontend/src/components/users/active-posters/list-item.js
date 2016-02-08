import React from 'react';
import { Link } from 'react-router'; // jshint ignore:line
import Avatar from 'misago/components/avatar'; // jshint ignore:line
import Status, { StatusIcon, StatusLabel } from 'misago/components/user-status'; // jshint ignore:line
import misago from 'misago/index'; // jshint ignore:line

export default class extends React.Component {
  getClassName() {
    if (this.props.rank.css_class) {
      return "list-group-item list-group-rank-" + this.props.rank.css_class;
    } else {
      return "list-group-item";
    }
  }

  getUserStatus() {
    if (this.props.user.status) {
      /* jshint ignore:start */
      return <Status user={this.props.user} status={this.props.user.status}>
        <StatusIcon user={this.props.user}
                    status={this.props.user.status} />
        <StatusLabel user={this.props.user}
                     status={this.props.user.status}
                     className="status-label hidden-xs hidden-sm" />
      </Status>;
      /* jshint ignore:end */
    } else {
      /* jshint ignore:start */
      return <span className="user-status">
        <span className="status-icon ui-preview">
          &nbsp;
        </span>
        <span className="status-label ui-preview hidden-xs hidden-sm">
          &nbsp;
        </span>
      </span>;
      /* jshint ignore:end */
    }
  }

  getRankName() {
    if (this.props.rank.is_tab) {
      /* jshint ignore:start */
      let rankUrl = misago.get('USERS_LIST_URL') + this.props.rank.slug + '/';
      return <Link to={rankUrl} className="rank-name">
        {this.props.rank.name}
      </Link>;
      /* jshint ignore:end */
    } else {
      /* jshint ignore:start */
      return <span className="rank-name">
        {this.props.rank.name}
      </span>;
      /* jshint ignore:end */
    }
  }

  getUserTitle() {
    if (this.props.user.title) {
      /* jshint ignore:start */
      return <span className="user-title hidden-xs hidden-sm">
        {this.props.user.title}
      </span>;
      /* jshint ignore:end */
    } else {
      return null;
    }
  }

  render() {
    /* jshint ignore:start */
    return <li className={this.getClassName()}>
      <div className="rank-user-avatar">
        <a href={this.props.user.absolute_url}>
          <Avatar user={this.props.user} size="50" />
        </a>
      </div>

      <div className="rank-user">
        <div className="user-name">
          <a href={this.props.user.absolute_url} className="item-title">
            {this.props.user.username}
          </a>
        </div>
        {this.getUserStatus()}
        {this.getRankName()}
        {this.getUserTitle()}
      </div>

      <div className="rank-position">
        <div className="stat-value">#{this.props.counter}</div>
        <div className="text-muted">{gettext("Rank")}</div>
      </div>

      <div className="rank-posts-counted">
        <div className="stat-value">{this.props.user.meta.score}</div>
        <div className="text-muted">{gettext("Ranked posts")}</div>
      </div>

      <div className="rank-posts-total">
        <div className="stat-value">{this.props.user.posts}</div>
        <div className="text-muted">{gettext("Total posts")}</div>
      </div>
    </li>;
    /* jshint ignore:end */
  }
}